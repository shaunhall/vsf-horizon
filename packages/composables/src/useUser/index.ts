import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import type { User, UserLoginResult, UserUpdateDetailsResult, UserUpdateEmailResult, UserUpdatePasswordResult } from '@vue-storefront/horizon-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types';
import { ExecutionResult } from 'graphql';

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    const user: ExecutionResult<User> = await context.$horizon.api.getUser();
    return user.data || null;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    await context.$horizon.api.logout();
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, params) => {
    const updateDetailsResult: ExecutionResult<UserUpdateDetailsResult | UserUpdateEmailResult> = 'fieldList' in params.updatedUserData
      ? await context.$horizon.api.updateUserDetails(params.updatedUserData)
      : await context.$horizon.api.updateUserEmail(params.updatedUserData);
    if (updateDetailsResult.data?.error) {
      throw {
        error: updateDetailsResult.data?.error,
        fieldErrors: updateDetailsResult.data?.fieldErrors
      };
    } else {
      return await context.$horizon.api.getUser();
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (context: Context, params) => {
    console.log('Mocked: useUser.register');
    return undefined;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    const loginResult: ExecutionResult<UserLoginResult> = await context.$horizon.api.login({ username, password });
    console.log(loginResult);
    if (loginResult.data?.error) {
      console.log('data error');
      return Promise.reject({
        error: loginResult.data?.error,
        fieldErrors: loginResult.data?.fieldErrors
      });
    } else if (loginResult.data?.customer) {
      return loginResult.data?.customer;
    } else {
      console.log('graphql error');
      return Promise.reject({
        error: loginResult.errors || 'ERROR'
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    const updatePasswordResult: ExecutionResult<UserUpdatePasswordResult> = await context.$horizon.api.updatePassword({ currentPassword, newPassword });
    if (updatePasswordResult.data?.error) {
      throw {
        error: updatePasswordResult.data?.error,
        fieldErrors: updatePasswordResult.data?.fieldErrors
      };
    } else {
      return await context.$horizon.api.getUser();
    }
  }
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);

import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
// import { useCart } from '@vue-storefront/horizon';
import type { User, UserLoginResult, UserRegisterResult, UserUpdateDetailsResult, UserUpdateEmailResult, UserUpdatePasswordResult } from '@vue-storefront/horizon-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../types';
import { ExecutionResult } from 'graphql';
import { useCart } from 'src/useCart';

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provide() {
    return useCart();
  },

  load: async (context: Context, { customQuery }) => {
    const user: ExecutionResult<User> = await context.$horizon.api.getUser(customQuery);
    return user.data || null;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    await context.$horizon.api.logout();
    await context.clear();
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, params) => {
    const updateDetailsResult: ExecutionResult<UserUpdateDetailsResult | UserUpdateEmailResult> = 'fieldList' in params.updatedUserData
      ? await context.$horizon.api.updateUserDetails(params.updatedUserData, params.customQuery)
      : await context.$horizon.api.updateUserEmail(params.updatedUserData, params.customQuery);
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
    const registerResult: ExecutionResult<UserRegisterResult> = await context.$horizon.api.register(params, params.customQuery);
    if (registerResult.data?.error) {
      return Promise.reject({
        error: registerResult.data?.error,
        fieldErrors: registerResult.data?.fieldErrors
      });
    } else if (registerResult.data?.customer) {
      return registerResult.data?.customer;
    } else {
      return Promise.reject({
        error: registerResult.errors[0].message || 'ERROR'
      });
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password, customQuery }) => {
    const loginResult: ExecutionResult<UserLoginResult> = await context.$horizon.api.login({ username, password }, customQuery);
    if (loginResult.data?.error) {
      return Promise.reject({
        error: loginResult.data?.error,
        fieldErrors: loginResult.data?.fieldErrors
      });
    } else if (loginResult.data?.customer) {
      console.log(context);
      await context.setCart(null);
      await context.load();
      return loginResult.data?.customer;
    } else {
      return Promise.reject({
        error: loginResult.errors[0].message || 'ERROR'
      });
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword, customQuery }) => {
    const updatePasswordResult: ExecutionResult<UserUpdatePasswordResult> = await context.$horizon.api.updatePassword({ currentPassword, newPassword }, customQuery);
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

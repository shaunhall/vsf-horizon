import { Context } from '@vue-storefront/core';
import { CustomerQuery, LoginMutation, LoginMutationVariables, LogoutMutation, RegistrationMutation, RegistrationMutationVariables, UpdateAccountSettingsMutation, UpdateAccountSettingsMutationVariables, UpdateEmailMutation, UpdateEmailMutationVariables, UpdatePasswordMutation, UpdatePasswordMutationVariables } from 'src/graphql-types';
import { User, UserLoginResult, UserRegisterResult, UserUpdateDetailsResult, UserUpdateEmailResult, UserUpdatePasswordResult } from 'src/types';
import customerQuery from 'src/graphql-operations/queries/customer.graphql';
import accountUpdateDetailsMutation from 'src/graphql-operations/mutations/accountUpdateDetails.graphql';
import accountUpdateEmailMutation from 'src/graphql-operations/mutations/accountUpdateEmail.graphql';
import accountUpdatePasswordMutation from 'src/graphql-operations/mutations/accountUpdatePassword.graphql';
import loginMutation from 'src/graphql-operations/mutations/login.graphql';
import logoutMutation from 'src/graphql-operations/mutations/logout.graphql';
import registerMutation from 'src/graphql-operations/mutations/register.graphql';
import { ExecutionResult } from 'graphql';
import { mutateWithCookies, queryWithCookies } from './_utils';

export async function getUser(context: Context): Promise<ExecutionResult<User>> {
  const userExecutionData = await queryWithCookies<CustomerQuery>(context, customerQuery);
  return { ...userExecutionData, data: userExecutionData.data?.customer };
}

export async function updateUserEmail(context: Context, params: UpdateEmailMutationVariables): Promise<ExecutionResult<UserUpdateEmailResult>> {
  const userExecutionData = await mutateWithCookies<UpdateEmailMutation>(context, accountUpdateEmailMutation, params);
  return { ...userExecutionData, data: userExecutionData.data?.updateEmailAddress };
}

export async function updateUserDetails(context: Context, params: UpdateAccountSettingsMutationVariables): Promise<ExecutionResult<UserUpdateDetailsResult>> {
  const userExecutionData = await mutateWithCookies<UpdateAccountSettingsMutation>(context, accountUpdateDetailsMutation, params);
  return { ...userExecutionData, data: userExecutionData.data?.updateAccountSettings };
}

export async function updateUserPassword(context: Context, params: UpdatePasswordMutationVariables): Promise<ExecutionResult<UserUpdatePasswordResult>> {
  const userExecutionData = await mutateWithCookies<UpdatePasswordMutation>(context, accountUpdatePasswordMutation, params);
  return { ...userExecutionData, data: userExecutionData.data?.updatePassword };
}

export async function login(context: Context, params: LoginMutationVariables): Promise<ExecutionResult<UserLoginResult>> {
  const userExecutionData = await mutateWithCookies<LoginMutation>(context, loginMutation, params);
  return { ...userExecutionData, data: userExecutionData.data?.login };
}

export async function register(context: Context, params: RegistrationMutationVariables): Promise<ExecutionResult<UserRegisterResult>> {
  const userExecutionData = await mutateWithCookies<RegistrationMutation>(context, registerMutation, params);
  return { ...userExecutionData, data: userExecutionData.data?.register };
}

export async function logout(context: Context): Promise<boolean> {
  const userData = await mutateWithCookies<LogoutMutation>(context, logoutMutation);
  return !(userData.errors?.length > 0);
}

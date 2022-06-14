import { Context } from '@vue-storefront/core';
import { CustomerQuery, LoginMutation, LoginMutationVariables, UpdateAccountSettingsMutation, UpdateAccountSettingsMutationVariables, UpdateEmailMutation, UpdateEmailMutationVariables, UpdatePasswordMutation, UpdatePasswordMutationVariables } from 'src/graphql-types';
import { User, UserLoginResult, UserUpdateDetailsResult, UserUpdateEmailResult, UserUpdatePasswordResult } from 'src/types';
import customerQuery from 'src/graphql-operations/queries/customer.graphql';
import accountUpdateDetailsMutation from 'src/graphql-operations/mutations/accountUpdateDetails.graphql';
import accountUpdateEmailMutation from 'src/graphql-operations/mutations/accountUpdateEmail.graphql';
import accountUpdatePasswordMutation from 'src/graphql-operations/mutations/accountUpdatePassword.graphql';
import loginMutation from 'src/graphql-operations/mutations/login.graphql';
import logoutMutation from 'src/graphql-operations/mutations/logout.graphql';
import { ExecutionResult } from 'graphql';

export async function getUser(context: Context): Promise<ExecutionResult<User>> {
  const cookie = context.req?.headers?.cookie;
  const userExecutionData: ExecutionResult<CustomerQuery> = await context.client.query({ context: { headers: { cookie } }, query: customerQuery })
    .catch((err) => {
      console.log(err);
    });
  return { ...userExecutionData, data: userExecutionData.data?.customer };
}

export async function updateUserEmail(context: Context, params: UpdateEmailMutationVariables): Promise<ExecutionResult<UserUpdateEmailResult>> {
  const cookie = context.req?.headers?.cookie;
  const userExecutionData: ExecutionResult<UpdateEmailMutation> = await context.client.mutate({ context: { headers: { cookie } }, mutation: accountUpdateEmailMutation, variables: params })
    .catch((err) => {
      console.log(err);
    });
  return { ...userExecutionData, data: userExecutionData.data?.updateEmailAddress };
}

export async function updateUserDetails(context: Context, params: UpdateAccountSettingsMutationVariables): Promise<ExecutionResult<UserUpdateDetailsResult>> {
  const cookie = context.req?.headers?.cookie;
  const userExecutionData: ExecutionResult<UpdateAccountSettingsMutation> = await context.client.mutate({ context: { headers: { cookie } }, mutation: accountUpdateDetailsMutation, variables: params })
    .catch((err) => {
      console.log(err);
    });
  return { ...userExecutionData, data: userExecutionData.data?.updateAccountSettings };
}

export async function updateUserPassword(context: Context, params: UpdatePasswordMutationVariables): Promise<ExecutionResult<UserUpdatePasswordResult>> {
  const cookie = context.req?.headers?.cookie;
  const userExecutionData: ExecutionResult<UpdatePasswordMutation> = await context.client.mutate({ context: { headers: { cookie } }, mutation: accountUpdatePasswordMutation, variables: params })
    .catch((err) => {
      console.log(err);
    });
  return { ...userExecutionData, data: userExecutionData.data?.updatePassword };
}

export async function login(context: Context, params: LoginMutationVariables): Promise<ExecutionResult<UserLoginResult>> {
  const cookie = context.req?.headers?.cookie;
  const userExecutionData: ExecutionResult<LoginMutation> = await context.client.mutate({ context: { headers: { cookie } }, mutation: loginMutation, variables: params });
  return { ...userExecutionData, data: userExecutionData.data?.login };
}

export async function logout(context: Context): Promise<boolean> {
  const cookie = context.req?.headers?.cookie;
  const userData = await context.client.mutate({ context: { headers: { cookie } }, mutation: logoutMutation })
    .catch((err) => {
      console.log(err);
    });
  return !(userData.errors?.length > 0);
}

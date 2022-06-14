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
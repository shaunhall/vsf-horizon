import { Context } from '@vue-storefront/core';
import { AccountSettingsFormQuery, PasswordFieldQuery, RegisterFormQuery } from 'src/graphql-types';
import { FormField, FormFieldInput } from 'src/types';

import accountSettingsFormQuery from 'src/graphql-operations/queries/accountSettingsForm.graphql';
import passwordFormQuery from 'src/graphql-operations/queries/passwordForm.graphql';
import registerFormQuery from 'src/graphql-operations/queries/registerForm.graphql';
import { ExecutionResult } from 'graphql';

export async function getForm(context: Context, params: FormFieldInput): Promise<ExecutionResult<FormField[]>> {
  const cookie = context.req?.headers?.cookie;
  if (params.type === 'password') {
    const formExecutionData: ExecutionResult<PasswordFieldQuery> = await context.client.query({ context: { headers: { cookie } }, query: passwordFormQuery })
      .catch((err) => {
        console.log(err);
      });
    return { ...formExecutionData, data: [formExecutionData.data?.passwordField] };
  }
  if (params.type === 'register') {
    const formExecutionData: ExecutionResult<RegisterFormQuery> = await context.client.query({ context: { headers: { cookie } }, query: registerFormQuery })
      .catch((err) => {
        console.log(err);
      });
    return { ...formExecutionData, data: formExecutionData.data?.form.fields };
  }
  if (params.type === 'settings') {
    const formExecutionData: ExecutionResult<AccountSettingsFormQuery> = await context.client.query({ context: { headers: { cookie } }, query: accountSettingsFormQuery })
      .catch((err) => {
        console.log(err);
      });
    return { ...formExecutionData, data: [...formExecutionData.data.accountSettingsForm.fields, formExecutionData.data.emailField] };
  } else {
    return { data: [] };
  }
}

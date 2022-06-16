import { Context } from '@vue-storefront/core';
import { AccountSettingsFormQuery, PasswordFieldQuery, RegisterFormQuery } from 'src/graphql-types';
import { FormField, FormFieldInput } from 'src/types';

import accountSettingsFormQuery from 'src/graphql-operations/queries/accountSettingsForm.graphql';
import passwordFormQuery from 'src/graphql-operations/queries/passwordForm.graphql';
import registerFormQuery from 'src/graphql-operations/queries/registerForm.graphql';
import { ExecutionResult } from 'graphql';
import { queryWithCookies } from './_utils';

export async function getForm(context: Context, params: FormFieldInput): Promise<ExecutionResult<FormField[]>> {
  if (params.type === 'password') {
    const formExecutionData = await queryWithCookies<PasswordFieldQuery>(context, passwordFormQuery);
    return { ...formExecutionData, data: [formExecutionData.data?.passwordField] };
  }
  if (params.type === 'register') {
    const formExecutionData = await queryWithCookies<RegisterFormQuery>(context, registerFormQuery);
    return { ...formExecutionData, data: formExecutionData.data?.form.fields };
  }
  if (params.type === 'settings') {
    const formExecutionData = await queryWithCookies<AccountSettingsFormQuery>(context, accountSettingsFormQuery);
    return { ...formExecutionData, data: [...formExecutionData.data.accountSettingsForm.fields, formExecutionData.data.emailField] };
  } else {
    return { data: [] };
  }
}

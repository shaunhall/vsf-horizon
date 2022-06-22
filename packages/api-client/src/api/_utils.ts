import { Context, CustomQuery } from '@vue-storefront/core';
import { DocumentNode, ExecutionResult } from 'graphql';

export const mutateWithCookies = async <T>(
  context: Context,
  mutation: DocumentNode,
  variables: Record<string, any> = {},
  customQuery: CustomQuery = {}
): Promise<ExecutionResult<T>> => {

  const { overwrite } = context.extendQuery(
    customQuery,
    {
      overwrite: {
        operation: mutation,
        variables
      }
    }
  );

  return await context.client.mutate({
    mutation: overwrite.operation,
    variables: overwrite.variables,
    context: {
      headers: {
        cookie: context.req?.headers?.cookie
      }
    }
  }).catch((err) => {
    console.log(err);
  });
};

export const queryWithCookies = async <T>(
  context: Context,
  query: DocumentNode,
  variables: Record<string, any> = {},
  customQuery: CustomQuery = {}
): Promise<ExecutionResult<T>> => {

  const { overwrite } = context.extendQuery(
    customQuery,
    {
      overwrite: {
        operation: query,
        variables
      }
    }
  );

  return await context.client.query({
    query: overwrite.operation,
    variables: overwrite.variables,
    context: {
      headers: {
        cookie: context.req?.headers?.cookie
      }
    }
  }).catch((err) => {
    console.log(err);
  });
};

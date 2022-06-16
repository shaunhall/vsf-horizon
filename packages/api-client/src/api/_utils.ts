import { Context } from '@apollo/client';
import { DocumentNode, ExecutionResult } from 'graphql';

export const mutateWithCookies = async <T>(context: Context, mutation: DocumentNode, variables: Record<string, any> = {}): Promise<ExecutionResult<T>> => {
  return await context.client.mutate({
    mutation,
    variables,
    context: {
      headers: {
        cookie: context.req?.headers?.cookie
      }
    }
  }).catch((err) => {
    console.log(err);
  });
};

export const queryWithCookies = async <T>(context: Context, query: DocumentNode, variables: Record<string, any> = {}): Promise<ExecutionResult<T>> => {
  return await context.client.query({
    query,
    variables,
    context: {
      headers: {
        cookie: context.req?.headers?.cookie
      }
    }
  }).catch((err) => {
    console.log(err);
  });
};

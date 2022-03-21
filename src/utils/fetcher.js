import { request } from "graphql-request";

const graphqlEndpoint = "https://realm.mongodb.com/api/client/v2.0/app/marketplace-app-ckfns/graphql";

export const graphqlFetcher = async ({ query, variables, token }) => {
  const response = await request(
    graphqlEndpoint,
    query,
    variables,
    new Headers({
      Authorization: `Bearer ${token}`
    })
  );
  return response;
};

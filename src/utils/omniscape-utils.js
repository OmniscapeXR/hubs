import { gql } from "graphql-request";

import { graphqlFetcher } from "./fetcher";

import realmApp from "../lib/realms";

export const getOmniscapeUsername = async email => {
  const query = gql`
      {
        omniscape_users_test(query: { email: "${email}" }) {
            username
        }
      }
    `;

  const graphqlResult = await graphqlFetcher({
    query,
    token: realmApp.currentUser.accessToken
  });

  const username = graphqlResult.omniscape_users_test.username;

  return username;
};

export const createEntry = ({ id, title, url, creator, type, previewURL }) => ({
  id,
  allow_remixing: false,
  attributions: {
    creator: creator
  },
  images: {
    preview: {
      url: previewURL
    }
  },
  description: null,
  url,
  type,
  name: title
});

import { useFetch } from "@nuxt/http";
import { gql, request } from "graphql-request";

export const useCollections = async () => {
  const endpoint = "https://mock.shop/api";

  const query = gql`
    {
      collections(first: 10) {
        edges {
          cursor
          node {
            id
            handle
            title
            description
            image {
              id
              url
            }
          }
        }
      }
    }
  `;

  const { collections } = await request(endpoint, query);
  return collections;
};

import { gql, request } from "graphql-request";

export const useAllProducts = async () => {
  const endpoint = "https://mock.shop/api";

  const query = gql`
    query {
      products(first: 6) {
        edges {
          node {
            id
            title
            handle
            description
            featuredImage {
              url
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await request(endpoint, query);
  const products = data.products.edges;

  return products;
};

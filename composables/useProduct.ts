import { request } from "graphql-request";

export const useProduct = async (handle: string) => {
  const endpoint = "https://mock.shop/api";

  const query = `
  query {
    product(handle: "${handle}") {
      id
      title
      description
      featuredImage {
        id
        url
      }
      collections(first: 1) {
        edges {
          node {
            title
            products(first: 6) {
              edges {
                node {
                  id
                  title
                  handle
                  featuredImage {
                    url
                  }
                  variants(first: 4) {
                    edges {
                      cursor
                      node {
                        id
                        title
                        image {
                          url
                        }
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
        }
      }
      variants(first: 4) {
        edges {
          cursor
          node {
            id
            title
            image {
              url
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
  try {
    const data = await request(endpoint, query);
    console.log(data);
    return data.product;
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw error;
  }
};

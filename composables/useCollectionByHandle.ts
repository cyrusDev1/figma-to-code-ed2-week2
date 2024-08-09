import { request } from "graphql-request";

export const useCollectionByHandle = async (handle: string) => {
  const endpoint = "https://mock.shop/api";

  const query = `
    query {
      collection(handle: "${handle}") {
        id
        handle
        title
        description
        image {
          id
          url
        }
        products(first: 6) {
          edges {
            node {
              id
              title
              handle
              featuredImage {
                id
                url
              }
              variants(first: 1) {
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
  `;
  try {
    const data = await request(endpoint, query);
    return data.collection;
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw error;
  }
};

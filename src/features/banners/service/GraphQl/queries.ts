import { gql } from "@apollo/client";

export const GET_ALL_BANNERS = gql`
    query GetAllBanners {
        getAllBannersQuery {
            productID
            title
            description
            category
            imageURL
            note
            productURL
            authorID
        }
    }
`;

export const GET_USER_BANNERS = gql`
    query GetMyBanners($authorID: ID!) {
        getBannerByUserIdQuery(authorID: $authorID) {
            productID
            title
            description
            category
            imageURL
            note
            productURL
            authorID
        }
    }
`;

export const GET_BANNER_BY_ID = gql`
    query GetBannerById($productID: ID!) {
        getBannerByProdIDQuery(productID: $productID) {
            productID
            title
            description
            category
            imageURL
            note
            productURL
            authorID
        }
    }
`;
export const GET_UNBANNERED_PRODUCTS = gql`
  query GetUnbanneredProducts {
    getUnbanneredProducts {
      // Product fields
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_ALL_BANNERS = gql`
  query getAllBannersQuery {
    getAllBannersQuery {
      productID
      title
      description
      category
      imageURL
      note
      productURL
      authorID
      createdAt
      _id
    }
  }
`;
export const GET_BANNER_BY_BANNER_ID = gql`
  query GetBannerByBannerIDQuery($bannerId: ID!) {
    getBannerByBannerIDQuery(bannerId: $bannerId) {
      productID
      title
      description
      category
      imageURL
      note
      productURL
      authorID
      _id
      createdAt
    }
  }
`;

export const GET_BANNER_BY_ID = gql`
  query Query($productId: ID!) {
    getBannerByProdIDQuery(productID: $productId) {
      productID
      title
      description
      category
      imageURL
      note
      productURL
      authorID
      _id
      createdAt
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

export const GET_UNBANNERED_PRODUCTS = gql`
  query GetUnbanneredProducts {
    getUnbanneredProducts {
      category
    }
  }
`;

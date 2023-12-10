import { gql } from "@apollo/client";

export const GET_ALL_BANNERS = gql`
  query GetAllBanners {
    getAllBannersService {
      _id
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

export const GET_USER_BANNERS = gql`
  query GetMyBanners($authorID: ID) {
    getBannerByUserService(authorID: $authorID) {
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

export const GET_BANNER_BY_PRODUCT_ID = gql`
  query getBannerByProdIDService($productId: ID) {
    getBannerByProdIDService(productID: $productId) {
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
export const GET_BANNER_BY_BANNER_ID = gql`
  query getBannerByBannerIDService($bannerId: ID) {
    getBannerByBannerIDService(bannerId: $bannerId) {
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
    getProductForBanners {
      title
      imageUrl
    }
  }
`;

import { gql } from "@apollo/client";

export const ADD_BANNER = gql`
  mutation AddBanner($banner: inputBanner) {
    addBannerService(banner: $banner) {
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

export const UPDATE_BANNER = gql`
  mutation updateBannerService($bannerId: ID, $properties: editBannerInput) {
    updateBannerService(bannerId: $bannerId, properties: $properties) {
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

export const DELETE_BANNER = gql`
  mutation DeleteBanner($bannerId: ID) {
    deleteBannerService(bannerId: $bannerId) {
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

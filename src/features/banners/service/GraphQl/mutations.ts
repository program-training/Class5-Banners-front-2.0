import { gql } from "@apollo/client";

export const ADD_BANNER = gql`
    mutation AddBanner($banner: inputBanner!) {
        addBanner(banner: $banner) {
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
    mutation UpdateBanner($bannerId: ID!, $properties: inputBanner) {
        updateBannerQuery(bannerId: $bannerId, properties: $properties) {
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

export const DELETE_BANNER = gql`
    mutation DeleteBanner($bannerId: ID!) {
        deleteBannerQuery(bannerId: $bannerId) {
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

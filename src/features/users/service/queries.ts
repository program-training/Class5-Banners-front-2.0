import { gql } from "@apollo/client";

export const LOGIN = gql`
  query loginService($user: LoginInput) {
    loginService(user: $user)
  }
`;

export const SIGNUP = gql`
  mutation Signup($user: AddUserInput) {
    signup(user: $user) {
      username
      email
      isAdmin
      user_id
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUserService {
    deleteUserService {
      username
      email
      user_id
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    getUserService {
      username
      email
      isAdmin
      user_id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation($user: UpdateUserInput) {
    updatedUserService(user: $user) {
      username
      email
      isAdmin
      user_id
    }
  }
`;

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

import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";


export const ADD_BOOK = gql`
mutation Mutation($title: String!, $image: String) {
  addBook(title: $title, image: $image) {
    id
    image
    title
    authors {
      id
      bookId
      name
    }
  }
}
`;

export const DELETE_BOOK = gql`
mutation Mutation($id: ID!) {
  deleteBook(id: $id) {
    id
    image
    title
    authors {
      bookId
      id
      name
    }
  }
}
`;

export const UPDATE_BOOK = gql`
mutation Mutation($id: ID!, $title: String!) {
  updateBook(id: $id, title: $title) {
    id
    image
    title
    authors {
      id
      bookId
      name
    }
  }
}
`;


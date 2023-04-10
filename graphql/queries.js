import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

export const GET_All_BOOKS = gql`
query {
    books {
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

export const GET_BOOK_BY_ID = gql`
query book(id: $bookId) {
    authors {
      bookId
      id
      name
    }
    id
    image
    title
  }
 }
`;
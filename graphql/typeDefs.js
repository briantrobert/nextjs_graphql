export const typeDefs = `#graphql

  type Book {
    id:ID!
    title: String!
    image:  String
    authors: [Author]
  }

  type Author {
    id:ID!
    name: String
    bookId: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, image:  String): Book
	updateBook(id: ID!, title: String!, image:  String): Book
	deleteBook(id:ID!): Book
	addAuthors(bookId: ID! , name: String!): Author
	deleteAuthors(id:ID!): Author
  }

`;


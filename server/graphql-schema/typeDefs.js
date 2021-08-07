const { gql } = require('apollo-server');

const typeDefs = gql`
  type Snippets {
    id: ID!
    code: String!
    name: String!
    user_id: ID!
    folder_id: ID!
  }

  type Folder {
    id: ID!
    name: String!
    user_id: ID!
    snippets: [Snippets]
  }
`
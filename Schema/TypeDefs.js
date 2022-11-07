const {gql} = require('apollo-server-express');

const productType = gql`
    type Product{
        id: ID!
        productName: String!
        unitPrice: Float!
    }

    #Queries
    type Query {
        getAllProducts: [Product!]!
    }

    #Mutations 
    type Mutation{
        addProduct(productName: String!, unitPrice: Float!): Product!
        getProductByID(id: ID!):Product!
    }
`;

module.exports = productType;
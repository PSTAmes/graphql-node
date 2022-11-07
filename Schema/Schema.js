const {productType} = require('./TypeDefs')
const {productResolver} = require('./Resolvers');

const { mergeSchemas } = require('@graphql-tools/schema');

const schema = mergeSchemas({
    schemas: productType,
    resolvers: productResolver
})

module.exports = schema
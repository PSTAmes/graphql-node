const {ApolloServer} = require('apollo-server');
const {schema} = require('./Schema/Schema');

const express= require('express');
const app = express();
const PORT = 3000;

const server = new ApolloServer({schema});

server.applyMiddleware({ app });

app.listen({port : PORT}, () => {
    console.log("SERVER IS RUNING ON PORT 3000");
});

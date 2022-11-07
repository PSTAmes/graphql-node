const mockData= require('../mockData');

const productResolver = {
    Query: {
        getAllProducts:() =>{
            return mockData;
        },
    },

    Mutation: {
        addProduct:(parent, args) => {
            const name = args.name
            const newProduct = args;
            newProduct.id = mockData.length + 1;
            mockData.forEach(product => {
                if (name != product.name) {
                    mockData.push(newProduct);
                    return newProduct;
                }else{
                    console.log("already exist");
                }
            });
        },

        getProductByID:(parent, args) => {
            const id = args.id;
            return product = mockData.find((p) => p.id == id)
        }
    }
};

module.exports = productResolver;
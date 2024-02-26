export const validationSchema = {

productName: {
notEmpty:{
    errorMessage: "Product name cannot be empty"
},
isString:{
    errorMessage: "Product name must be a string"
}},

price: {
    notEmpty:{
        errorMessage: "Product price cannot be empty"
    },
},
description: {
    notEmpty:{
        errorMessage: "Product description cannot be empty"
    },
    isString:{
        errorMessage: "Product description must be a string"
    },
}

}

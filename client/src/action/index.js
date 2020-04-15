// start Product todo data
export const loadProductSuccess = (product) => ({
    type: 'LOAD_PRODUCT_SUCCESS',
    product
})

export const loadProductFailure = () => ({
    type: 'LOAD_PRODUCT_FAILURE'
})

export const loadProduct = () => ({
    type: 'LOAD_PRODUCTS'
})

// end load Product data

// start add Product data

export const addProductSuccess = () => ({
    type: 'ADD_PRODUCT_SUCCESS',
})

export const addProductFailure = (id) => ({
    type: 'ADD_PRODUCT_FAILURE', id
})

export const addProductRedux = (title, description, brand, price, detail_product) => ({
    type: 'ADD_PRODUCT', title, description, brand, price, detail_product
})

export const addProduct = (title, description, brand, price, detail_product) => ({
    type: 'ADD_PRODUCT', title, description, brand, price, detail_product
})

// end add Product data
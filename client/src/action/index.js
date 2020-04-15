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

export const addProductSuccess = (product) => ({
    type: 'POST_PRODUCT_SUCCESS',
    product
})

export const addProductFailure = () => ({
    type: 'POST_PRODUCT_FAILURE'
})

export const addProductRedux = (title, rate, description, price, brand, detail_product) => ({
    type: 'POST_PRODUCT', title, rate, description, price, brand,  detail_product
})

export const addProduct = (title, rate, description, price, brand, detail_product) => ({
    type: 'ADD_PRODUCT', title, rate, description, price, brand, detail_product
})

// end add Product data
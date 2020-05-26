// start Product todo data
export const loadProductSuccess = (products) => ({
    type: 'LOAD_PRODUCT_SUCCESS',
    products
})

export const loadProductFailure = () => ({
    type: 'LOAD_PRODUCT_FAILURE'
})

export const loadProduct = () => ({
    type: 'LOAD_PRODUCTS'
})
// end load Product data

// START LOAD DETAIL
export const loadProductDetailSuccess = (products) => ({
    type: 'LOAD_DETAIL_SUCCESS', products
})

export const loadProductDetailFailure = () => ({
    type: 'LOAD_DETAIL_FAILURE'
})

export const loadProductDetail = (id) => ({
    type: 'LOAD_DETAIL', id
})

// END LOAD DETAIL

// start add Product data

export const addProductSuccess = (product) => ({
    type: 'POST_PRODUCT_SUCCESS',
    product
})

export const addProductFailure = (id) => ({
    type: 'POST_PRODUCT_FAILURE',
    id
})

export const addProductRedux = (id, title, rate, description, price, brand, detail_product, colors, capacities, file) => ({
    type: 'POST_PRODUCT', id, title, rate, description, price, brand, detail_product,
    ...(colors instanceof Array && { colors: JSON.stringify(colors) }),
    ...(capacities instanceof Array && { capacities: JSON.stringify(capacities) }),
    ...(file && { file })
})

export const addProduct = (title, rate, description, price, brand, detail_product, colors, capacities, file) => ({
    type: 'ADD_PRODUCT', title, rate, description, price, brand, detail_product, colors, capacities, file
})

// end add Product data

// start delete Product data

export const deleteProductRedux = (id) => ({
    type: 'DELETE_PRODUCT', id
})

export const deleteProductSuccess = (product) => ({
    type: 'DELETE_PRODUCT_SUCCESS',
    product
})

export const deleteProductFailure = () => ({
    type: 'DELETE_PRODUCT_FAILURE'
})

export const deleteProduct = (id) => ({
    type: 'REMOVE_PRODUCT', id
})

// end delete Product data
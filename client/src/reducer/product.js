const product = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_PRODUCT_SUCCESS':
            // console.log(action, ' ini load data')
            return action.product

        // change state to object type
        case 'POST_PRODUCT':
            console.log(action , 'ini add product')
            return [
                ...state,
                {
                    title: action.title,
                    rate : action.rate,
                    description: action.description,
                    price: action.price,
                    brand: action.brand,
                    detail_product: action.detail_product,
                }
            ]

        case 'POST_PRODUCT_SUCCESS':
            return action.product

        case 'LOAD_PRODUCT_FAILURE':
        case 'POST_PRODUCT_FAILURE':
        default:
            return state
    }

}

export default product
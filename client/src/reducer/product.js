const product = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_PRODUCT_SUCCESS':
            console.log(action, ' ini load data')
            return action.product

        // change state to object type
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    title: action.title,
                    description: action.description,
                    brand: action.brand,
                    price: action.price,
                    detail_product: action.detail_product,
                }
            ]

        case 'ADD_PRODUCT_SUCCESS':
            return state.map(data => {
                return data
            })

        case 'LOAD_PRODUCT_FAILURE':
        case 'ADD_PRODUCT_FAILURE':
        default:
            return state
    }

}

export default product
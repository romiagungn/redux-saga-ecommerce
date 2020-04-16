const product = (state = [], action) => {

    switch (action.type) {
        case 'LOAD_PRODUCT_SUCCESS':
            // console.log(state, action, 'ini load dataaa')
            return action.products

        // case ADD_DATA:
        //     return [
        //         ...state,
        //         {
        //             id: action.id,
        //             title: action.title,
        //             description: action.description,
        //             brand: action.brand,
        //             price: action.price,
        //             detail: action.detail
        //         }
        //     ]

        // change state to object type
        case 'POST_PRODUCT':
            console.log(action, 'ini add product')
            return Object.assign({}, state, {
                id: action.id,
                title: action.title,
                description: action.description,
                brand: action.brand,
                price: action.price,
                detail: action.detail,
            })

        case 'POST_PRODUCT_SUCCESS':
            return action.product

        case 'DELETE_PRODUCT':
            console.log("id yang dihapus", action)
            return state.filter((item) => item.id !== action.id)

        case 'DELETE_PRODUCT_SUCCESS':
        case 'DELETE_PRODUCT_FAILURE':
        case 'LOAD_PRODUCT_FAILURE':
        case 'POST_PRODUCT_FAILURE':
        default:
            return state
    }

}

export default product
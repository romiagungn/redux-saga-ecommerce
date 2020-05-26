const details = (state = {product: []}, action) => {

    switch (action.type) {
        case 'LOAD_DETAIL_SUCCESS':
            return {
                ...state,
                product: action.product
            }
        case 'LOAD_DETAIL_FAILURE':
        default:
            return state
    }
}

export default details
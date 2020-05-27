const details = (state = {product: []}, action) => {

    switch (action.type) {
        case 'LOAD_DETAIL_SUCCESS':
            
            console.log(action.products,'ini detail');
            return {
                ...state,
                product: action.products
            }
        case 'LOAD_DETAIL_FAILURE':
        default:
            return state
    }
}

export default details
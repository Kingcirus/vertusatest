const initialState = {
    isLoading : false,
    products:[]
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload.products,
            }
        case 'GET_MY_PRODUCTS':
                return {
                    ...state,
                    products: action.payload.products,
                }
        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload.product,
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(item => item._id !== action.payload)
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [action.payload, ...state.products]
                };
        default:
            return state;
    }
}

export default productReducer;
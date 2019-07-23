const initialState = {
    isLogged : false,
    usertoken:'',
    userdata:[],
};

const authReducer = (state = initialState, action) => {
   
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('userid', action.payload.userid);
            return {
                ...state,
                usertoken: action.payload.token
            }
        case 'GET_USER':
                return {
                    ...state,
                    userdata: action.payload
        }
        case 'GET_USERS':
                return {
                    ...state,
                    userdata: action.payload
        }
            
        default:
            return state;
    }
}

export default authReducer;
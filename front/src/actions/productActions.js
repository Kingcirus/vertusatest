import axios from 'axios';

export const getProducts = (token) => dispach => {
    axios.get('/api/product/get-products', {headers:{"auth-token":token}})
    .then(res => 
        dispach({
            type:'GET_PRODUCTS',
            isLogged:true,
            payload:res.data
        })
    );
};

export const getMyProducts = (id,token) => dispach => {
    axios.get(`/api/product/get-my-products/${id}`, {headers:{"auth-token":token}})
    .then(res => 
        dispach({
            type:'GET_MY_PRODUCTS',
            isLogged:true,
            payload:res.data
        })
    );
};

export const getProduct = (id,token) => dispach => {
    axios.get(`/api/product/get-product/${id}`, {headers:{"auth-token":token}})
    .then(res => 
        dispach({
            type:'GET_PRODUCT',
            isLogged:true,
            payload:res.data
        })
    );
};
export const addProduct = (name, description,token) => dispach => {
    axios.post('/api/product/add-product', {name:name, description:description},
    {headers:{"auth-token":token}},
    )
    .then(res => 
        dispach({
            type:'ADD_PRODUCT',
            payload:res.data
        })
    );
};

export const deleteProduct = (id,token) => dispach => {
    axios.get(`/api/product/delete/${id}`, {headers:{"auth-token":token}})
    .then(res => 
        dispach({
            type:'DELETE_PRODUCT',
            isLogged:true,
            payload:id
        })
    );
};

import axios from 'axios';

export const login = (email, password) => dispach => {
    axios.post('/api/user/login', {email, password})
    .then(res => 
        dispach({
            type:'LOGIN',
            payload:res.data
        })
    );
};

export const getUser = (id, token) => dispach => {
    axios.get(`/api/user/get-user/${id}`, {headers:{'auth-token':token}})
    .then(res =>
        dispach({
            type:'GET_USER',
            payload:res.data
        })
    );
};

export const getUsers = (token) => dispach => {
    axios.get(`/api/user/get-users/`, {headers:{'auth-token':token}})
    .then(res =>
        dispach({
            type:'GET_USERS',
            payload:res.data
        })
    );
};
export const updateUser = (id, token) => dispach => {
    axios.get(`/api/user/update/${id}`, {headers:{'auth-token':token}})
    .then(res =>
        res
    );
};
# vertusatest

#Start server using below code
npm run dev

#you need to create a .env file add the below code 
#create a cluster with "test" name in mongodb atlas add the link below
DB_CONNECT = <MONGODB_URI>
TOKEN_SECRET = skdlamsdasdsal

#to install front packages run below code
npm run client-install

#API's for USER CRUD
#CREATE
Uri: /api/user/register
Method: POST
parameters:{
	"name": "TEST1234",
	"email": "test1@gmail.com",
	"password": "test1231"
}

response:{
    "user": "5d36ffa65a0e7e7d495945b3"
}

#LOGIN
Uri: /api/user/login
Method: POST
{
	"email":"admin@gmail.com",
	"password":"123456"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfX2lkIjoiNWQzMmY4MmM1NmFjMjQzNTQ5ZjIzYjc0IiwiaWF0IjoxNTYzODg1NTUzfQ.fHkqTMHFrVbAMV1Jve17FYk6VIjEvFIRZ2Ct1tHyLRY",
    "userid": "5d32f82c56ac243549f23b74"
}

#UPDATE
Uri: /api/user/update/id
Method: Post
headers:{
auth-token:<TOKEN>
parameters:{
	"name": "test"
}
response: data updated!

#GET_USERS
Uri: /api/user/get-users
Method: Get
header:{
auth-toke:<TOKEN>
}

response:{
    "users": [
        {
            "_id": "5d32f82c56ac243549f23b74",
            "name": "Two",
            "email": "admin@gmail.com",
            "password": "$2a$10$KJBVPebKdNvWqeduAtHkYebeFpQo/8RNbJ31E2ZV6hKKN5usZKrZW",
            "date": "2019-07-20T11:17:00.771Z",
            "__v": 0
        },
        {
            "_id": "5d35dce1b3f30071b510ce41",
            "name": "One Two",
            "email": "one@gmail.com",
            "password": "$2a$10$pTzs6w96xc8O3X.w7tBaKOI7RksfZVd.4XFWtkBEgreLy/hBqwa46",
            "date": "2019-07-22T15:57:21.564Z",
            "__v": 0
        },
    ]
}
#GET_USER
Uri: /api/user/get-user/id
Method: Get
header:{
auth-toke:<TOKEN>
}

response:{
    "users": 
        {
            "_id": "5d32f82c56ac243549f23b74",
            "name": "Two",
            "email": "admin@gmail.com",
            "password": "$2a$10$KJBVPebKdNvWqeduAtHkYebeFpQo/8RNbJ31E2ZV6hKKN5usZKrZW",
            "date": "2019-07-20T11:17:00.771Z",
            "__v": 0
        }
}


#DELETE
Uri: /api/user/delete/id
Method:Get
header:{
auth-toke:<TOKEN>
}
response:{
	User deleted!
}

#API's for PRODUCT CRUD
#CREATE
Uri: api/product/add-product/
Method:Post
header:{
auth-toke:<TOKEN>
}
parameters: {
	"name":"aksdksajdl",
	"description":"327462348sakdsakdn"
}
response:{
product:5d32f82c56ac243549f23b74
}

#UPDATE
Uri: /api/product/update/id
Method: Post
headers:{
auth-token:<TOKEN>
}
parameters:{
	"name":"aksdksajdl",
	"description":"327462348sakdsakdn"
}
response:data updated

#GET_PRODUCTS
Uri: api/product/get-products/
Method: Get
headers:{
auth-token:<TOKEN>
}
response:{
    "products": [{
        "_id": "5d36c0072627bd451125474d",
        "name": "test",
        "description": "asdasdmlkas aksdmsa",
        "userid": "5d32f82c56ac243549f23b74",
        "date": "2019-07-23T08:06:31.860Z",
        "__v": 0
    }]
}
#GET_PRODUCT
Uri: api/product/get-product/id
Method: Get
headers:{
auth-token:<TOKEN>
}
response:{
    "product": {
        "_id": "5d36c0072627bd451125474d",
        "name": "test",
        "description": "asdasdmlkas aksdmsa",
        "userid": "5d32f82c56ac243549f23b74",
        "date": "2019-07-23T08:06:31.860Z",
        "__v": 0
    }
}

#DELETE
Uri: /api/product/delete/id
Method: Get
headers:{
auth-token:<TOKEN>
}
response: Product deleted!

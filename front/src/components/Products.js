import React from 'react';
import {connect} from 'react-redux'
import {getProducts, deleteProduct} from '../actions/productActions';
import { Table } from 'reactstrap';

class Products extends React.Component{
    componentDidMount(){
        const token = localStorage.getItem('token');
        this.props.getProducts(token);
    }
    render(){
        return(
            <div className="container">
                <a href="/add-product" className="btn btn-primary" >Add New</a>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.products.products.map((product,key)=>{
                        return <tr key={product._id}>
                                <td>{key+1}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td><a href={'/product/'+product._id} className="btn btn-info">View</a></td>
                                </tr>
                    })}
                    </tbody>
                </Table>    
            </div>
        );
    }
};
const mapStateToProps = state => {
    return{
        products: state.products,
        auth:state.auth
    }
}
export default connect(mapStateToProps,{ getProducts, deleteProduct })(Products);
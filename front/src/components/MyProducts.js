import React from 'react';
import {connect} from 'react-redux'
import {getMyProducts, deleteProduct} from '../actions/productActions';
import { Table } from 'reactstrap';

class MyProducts extends React.Component{
    componentDidMount(){
        const token = localStorage.getItem('token');
        this.props.getMyProducts(this.props.match.params.id,token);
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
                                <td><a href="#" className="btn btn-info">Edit</a> <button type="button" onClick={()=>{
                                    if(window.confirm('Are you sure?')){
                                        this.props.deleteProduct(product._id,localStorage.getItem('token'));
                                    }
                                }} className="btn btn-danger">Delete</button></td>
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
        products: state.products
    }
}
export default connect(mapStateToProps,{ getMyProducts, deleteProduct })(MyProducts);
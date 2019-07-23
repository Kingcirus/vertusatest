import React from 'react';
import {connect} from 'react-redux';
import {getProduct} from '../actions/productActions'
import {Container, Row, Table} from 'reactstrap';

class ViewProduct extends React.Component{
    state = {
        name:'',
        description:''
    }
    componentDidMount(){
        const token = localStorage.getItem('token');
        this.props.getProduct(this.props.match.params.id, token);
    }
    render(){
        const data = this.props.product;
        return(
            <div>
                <Container>
                    <h2>Product details</h2>
                    {data ? 
                         <Table>
                         <tr>
                             <th>Name</th>
                             <td>{data.name}</td>
                         </tr>
                         <tr>
                             <th>Description</th>
                             <td>{data.description }</td>
                         </tr>
                     </Table>
                         : '' }
                <a href="/products" className="btn btn-info">Back</a>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        product: state.products.product
    }
}
export default connect(mapStateToProps, {getProduct})(ViewProduct);
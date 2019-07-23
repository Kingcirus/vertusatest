import React from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../actions/productActions'
import {Container, Row, Col,Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

class AddProduct extends React.Component{
    state = {
        name:'',
        description:''
    }
    addProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        this.props.addProduct(this.state.name, this.state.description,token);
        this.props.history.push("/products");
    }
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={{ size: 5, order: 1, offset: 4 }}>
                            <Form method="Post" onSubmit={this.addProduct}>
                                <FormGroup row>
                                    <Label for="name" sm={2}>Name</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({name:e.target.value})
                                        }} type="name" name="name" id="name" placeholder="Enter name here" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={3}>Description</Label>
                                    <Col sm={9}>
                                        <textarea onChange={(e) => {this.setState({description:e.target.value})}}></textarea>
                                    </Col>
                                </FormGroup>
                                <Button className="btn btn-block">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products:state.products
});
export default connect(mapStateToProps, {addProduct})(AddProduct);
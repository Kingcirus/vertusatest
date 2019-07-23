import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col,Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

import {getUser} from '../actions/authActions'
class MyProfile extends React.Component{
    state = {
        name:'',
        email:'',
        userdata:''
    }
    componentDidMount(){
        const token = localStorage.getItem('token');
        const userid = this.props.match.params.id;
        this.props.getUser(userid, token);
    }
    addProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        this.props.addProduct(this.state.name, this.state.description,token);
        this.props.history.push("/products");
    }
    render(){
        console.log(this.props.userdata)
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={{ size: 5, order: 1, offset: 4 }}>
                        <h2>Profile</h2>
                            <Form method="Post" onSubmit={this.addProduct}>
                            <FormGroup row>
                                    <Label for="name" sm={2}>Name</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({name:e.target.value})
                                        }} type="name" name="name" id="name"  placeholder="Enter name here" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({email:e.target.value})
                                        }} type="email" name="email" id="exampleEmail" value="" placeholder="Enter email here" />
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
    userdata:state.auth.userdata.user
});
export default connect(mapStateToProps, {getUser})(MyProfile);
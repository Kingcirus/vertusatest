import React from 'react';
import {Container, Row, Col,Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../actions/authActions';
import PropTypes from 'prop-types';

class Login extends React.Component{
    state = {
        email:'',
        password:'',
        isLogged:false
    }
    authenticate = async (e) => {
        e.preventDefault();
        await this.props.login(this.state.email, this.state.password);
        // window.location = "/products";
        this.props.history.push('/products');
    }
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={{ size: 5, order: 1, offset: 4 }}>
                            <Form method="Post" onSubmit={this.authenticate}>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({email:e.target.value})
                                        }} type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({password:e.target.value})
                                        }} type="password" name="password" id="examplePassword" placeholder="Enter password" />
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
    auth: state.isLogged
});
export default connect(mapStateToProps, {login})(Login);

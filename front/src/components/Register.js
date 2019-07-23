import React from 'react';

import {Container, Row, Col,Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';

class Register extends React.Component{
    state = {
        email:'',
        name:'',
        password:'',
        cpassword:'',
        isLogged:false
    }
    authenticate = async (e) => {
        e.preventDefault();
        if( this.state.password === '' || this.state.password !== this.state.cpassword){
            alert('Password didn\'t match!');
            return false
        }else{
            const response = await axios.post('/api/user/register', 
            {
                name:this.state.name,
                email:this.state.email, 
                password:this.state.password
            });       
            console.log(response.data);
            this.props.history.push("/login");
        }
        
    }
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={{ size: 5, order: 1, offset: 4 }}>
                            <Form method="Post" onSubmit={this.authenticate}>
                                <FormGroup row>
                                    <Label for="name" sm={2}>Name</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({name:e.target.value})
                                        }} type="name" name="name" id="name" placeholder="Enter name here" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({email:e.target.value})
                                        }} type="email" name="email" id="exampleEmail" placeholder="Enter email here" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({password:e.target.value})
                                        }} type="password" name="password" id="password" placeholder="Enter password here" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="cpassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input onChange={(e) => {
                                            this.setState({cpassword:e.target.value})
                                        }} type="password" name="cpassword" id="cpassword" placeholder="Confirm password" />
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

export default Register;
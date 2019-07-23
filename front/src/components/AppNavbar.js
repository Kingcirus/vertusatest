import React from 'react';
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container
} from 'reactstrap';

import {connect} from 'react-redux';

class AppNavbar extends React.Component {
    state = {
        isOpened: false,
        userid: localStorage.getItem('userid')
    }

    toggle = () => {
        this.setState({
            isOpened : !this.state.isOpened
        })
    }

    render(){
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Test</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpened} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    {!this.state.userid ? <NavLink href="/login">Login</NavLink> : <NavLink href="/logout" onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('userid');
                                        window.location = "/";
                                    }}>Logout</NavLink>}
                                </NavItem>
                                {!this.state.userid ? <NavItem>
                                    <NavLink href="/register">Register</NavLink>
                                </NavItem> : <NavItem>
                                    <NavLink href="/products">Products</NavLink>
                                </NavItem>}
                                {this.state.userid ? <NavItem>
                                    <NavLink href={"/my-products/"+this.state.userid}>My Products</NavLink>
                                </NavItem> :'' }
                                {/* {this.state.userid ? <NavItem>
                                    /<NavLink href={"/my-profile/"+this.state.userid}>My Profile</NavLink>
                                </NavItem> :'' } */}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps)(AppNavbar);
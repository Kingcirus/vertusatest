import React from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../actions/authActions';
import { Table } from 'reactstrap';

class Users extends React.Component{
    componentDidMount(){
        const token = localStorage.getItem('token');
        this.props.getUsers(token);
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
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.userdata.map((user,key)=>{
                        return <tr key={user._id}>
                                <td>{key+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><a href={'/product/'+user._id} className="btn btn-info">View</a></td>
                                </tr>
                    })}
                    </tbody>
                </Table>    
            </div>
        );
    }
};
const mapStateToProps = state => {
    // console.log(state);
    return{
        userdata:state.auth.userdata.users
    }
}
export default connect(mapStateToProps,{ getUsers })(Users);
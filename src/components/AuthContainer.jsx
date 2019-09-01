import React from  "react"
import Auth from "./Auth";
import {setEmail, setPass} from "../store/auth/actions";
import {connect} from "react-redux"
class AuthContainer extends React.Component {
    render(){
        return <Auth
            email={this.props.email}
            password={this.props.password}
            setEmail={this.props.setEmail}
            setPass={this.props.setPass}

        />;
    }
}
const mapStateToProps = state =>{
    return{
        email: state.auth.email,
        password: state.auth.password
    };
};
const mapDispatchToProps={
    setEmail,
    setPass
};
export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer)
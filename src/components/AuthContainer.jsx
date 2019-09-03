import React from  "react"
import Auth from "./Auth";
import {setEmail, setPass} from "../store/auth/actions";
import {connect} from "react-redux"
import Registration from "./Registration";
import {signIn} from "../store/actions";
class AuthContainer extends React.Component {
    render(){
        return <Auth
            email={this.props.email}
            password={this.props.password}
            setEmail={this.props.setEmail}
            setPass={this.props.setPass}
            signIn={this.props.signIn}
            sign = {this.props.sign}
        />;
    }
}
const mapStateToProps = state =>{
    return{
        email: state.auth.email,
        password: state.auth.password,
        sign:state.sign.sign
    };
};
const mapDispatchToProps={
    setEmail,
    setPass,
    signIn
};
export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer)
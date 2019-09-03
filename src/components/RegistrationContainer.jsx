import React from  'react'
import {connect} from "react-redux";
import Registration from "./Registration";
import {setRepPass,setEmail,setPass} from "../store/registration/actions";
import {signIn} from "../store/actions";
class RegistrationContainer extends React.Component{
    render(){
        return(
            <Registration
                email={this.props.email}
                password={this.props.password}
                repeatPassword={this.props.repeatPassword}
                setEmail={this.props.setEmail}
                setPass={this.props.setPass}
                setRepPass={this.props.setRepPass}
                signIn={this.props.signIn}
                sign = {this.props.sign}
            />
        )
    }
}
const mapStateToProps = state =>{
    return{
        email: state.reg.email,
        password: state.reg.password,
        repeatPassword: state.reg.repeatPassword,
        sign: state.sign.sign
    };
};
const mapDispatchToProps={
    setEmail,
    setPass,
    setRepPass,
    signIn
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer)
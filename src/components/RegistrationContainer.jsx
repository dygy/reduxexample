import React from  'react'
import {connect} from "react-redux";
import Registration from "./Registration";
import {setRepPass,setEmail,setPass} from "../store/registration/actions";

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
            />
        )
    }
}
const mapStateToProps = state =>{
 //   console.log(state.reg);
    return{
        email: state.reg.email,
        password: state.reg.password,
        repeatPassword: state.reg.repeatPassword
    };
};
const mapDispatchToProps={
    setEmail,
    setPass,
    setRepPass
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer)
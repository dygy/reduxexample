import React from  "react"
import {connect} from "react-redux"
import {signIn} from "../store/actions";
import {form} from "./style";
import AuthContainer from "./AuthContainer";
import RegistrationContainer from "./RegistrationContainer";
class Form extends React.Component {
    render() {
        console.log(this.props)
        if (this.props.sign) {
            return (
                    <div className={"forms"}
                         style={form}>
                        <AuthContainer/>
                    </div>
            )

        } else if (!this.props.sign) {
            return (
                <div className={"forms"}
                     style={form}>
                    <RegistrationContainer/>
                </div>
            )

        }
    }
}
const mapStateToProps = state =>{
    return{
       sign:state.sign.sign
    };
};
const mapDispatchToProps={
    signIn
};
export default connect(mapStateToProps,mapDispatchToProps)(Form)
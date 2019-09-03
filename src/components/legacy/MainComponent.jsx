import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changePassword,changeName} from '../../store/main/actions/actions'
class MainComponent extends React.Component{
    render(){
     //   console.log(this.props);
        const {name, password, changeName,changePassword} = this.props;
        return <div>
            <div><input type={"text"} placeholder={"Name"} value={this.props.name}
                        onChange={(event)=>{
                            changeName(event.target.value)
                        }}
            /> </div>
            <div><input type={"password"} placeholder={"Password"} value={this.props.password}
                        onChange={(event)=>{
                            changePassword(event.target.value)
                        }}
            /> </div>

        </div>
    }
}
const putStateToProps = (state)=>{
    //console.log(state);
    return{
        name: state.name,
        password: state.password
    }
};
const putActionsToProps = (dispatch)=>{
    return{
        changeName: bindActionCreators(changeName,dispatch),
        changePassword:bindActionCreators(changePassword,dispatch)
    }
}
export default connect(putStateToProps, putActionsToProps)(MainComponent);


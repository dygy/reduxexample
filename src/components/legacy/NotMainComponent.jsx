import React from "react";
import {connect} from "react-redux";

class NotMainComponent extends React.Component{
    render(){
        console.log(this.props);
        const {name, password, changeName,changePassword} = this.props;
        return<div>
            {this.props.name +" " +this.props.password}
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

export default connect(putStateToProps)(NotMainComponent);
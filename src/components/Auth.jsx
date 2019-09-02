import React from  "react"
import {buttonStyle, depth} from './style'
export default class Auth extends React.Component {

    constructor(props){
        super(props);
        this.onEmailChange= this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
   }
    onEmailChange (event){
        this.props.setEmail(event.target.value)
    }
    onPasswordChange(event){
        this.props.setPass(event.target.value)
    }
    render(){
        return (
            <div className={"auth"} style={{height:'150px'}}>
                <h3>Sign In</h3>
                <form>
                    <div>
                        <input
                            style={depth}
                            type={"text"}
                            name={"login"}
                            autoComplete={"off"}
                            placeholder={"Email"}
                            spellCheck={false}
                            value={this.props.email}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <input
                            style={depth}
                            type={"password"}
                            name={"password"}
                            placeholder={"Password"}
                            value={this.props.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <p> </p>
                        <button style={buttonStyle}>Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}
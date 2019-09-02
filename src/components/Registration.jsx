import React from  "react"
import {buttonStyle, depth, title} from './style'
export default class Registration extends React.Component {
    constructor(props){
        super(props);
        this.onEmailChange= this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    }
    onEmailChange (event){
        this.props.setEmail(event.target.value)
    }
    onPasswordChange(event){
        this.props.setPass(event.target.value)
    }
    onRepeatPasswordChange(event){
        this.props.setRepPass(event.target.value)
    }
    render(){
        return (
            <div className={"registration"} style={{height:'200px'}}>
                <h3 style={title}>Sign Up</h3>
                <form>
                    <div style={{padding:'5px'}}>
                        <input type={"text"}
                               name={"login"}
                               autoComplete={"off"}
                               placeholder={"Email"}
                               spellCheck={false}
                               onChange={this.onEmailChange}
                               value={this.props.email}
                               style={depth}
                        />
                    </div>
                    <div style={{padding:'5px'}}>
                        <input type={"password"}
                               name={"password"}
                               placeholder={"Password"}
                               value={this.props.password}
                               onChange={this.onPasswordChange}
                               style={depth}
                        />
                    </div>
                    <div style={{padding:'5px'}}>
                        <input type={"password"}
                               name={"password"}
                               placeholder={"Repeat password"}
                               onChange={this.onRepeatPasswordChange}
                               value={this.props.repeatPassword}
                               style={depth}
                        />
                    </div>
                    <div>
                        <p> </p>
                        <button style={buttonStyle}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
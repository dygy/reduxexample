import React from 'react';

import {connect, Provider} from 'react-redux';
import {store} from "../redux";

export class Header extends React.Component {
    state = {
        name: "",
        writable: true,
        enumerable: true,
        configurable: true
    }

    render() {

        return (
            <div>
                <button>Menu</button>
                <button>About</button>
                <button>Contact</button>
                <button>{1+5}</button>
                <input  type={"text"} id={"name"}
                        onChange={this.props.name }
                        value={"Name"}/>
            </div>
        )
    }
}
// HeaderContainer.js
const mapStateToProps = state => ({
    name: state.name,
});
const  setName=(name)=> {

}
const mapDispatchToProps = {

};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;



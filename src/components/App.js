import React from 'react';
import  Header from './Header';
import {connect} from 'react-redux';

import {activateGeod, closeGeod, store} from '../redux';

// App.js
export class App extends React.Component {
    handle(val){
        console.log(val);
    }
    render() {
        return (
            <div>
                <Header/>
                {console.log(store)}
                <h1>{this.props.geod.title || 'Hello World!'}</h1>
                {this.props.geod.title ? (
                    <button onClick={this.props.closeGeod}>Exit World</button>
                ) : (
                    <button
                        onClick={() => {
                            this.props.activateGeod({title: 'Allo World!'})
                        }
                        }
                    >
                         Click Me!
                       </button>
                )}
            </div>
        );
    }
}

// AppContainer.js
const mapStateToProps = state => ({
    geod: state.geod,
});

const mapDispatchToProps = {
    activateGeod,
    closeGeod,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
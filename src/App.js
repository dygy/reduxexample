import {createStore} from "redux"
import React from "react";
import rootReducer from "./store/reducers";
import {Provider} from "react-redux";
import './index.css';
import Form from "./components/Form.jsx";
import {wrapper} from "./components/style";
const store = createStore(rootReducer);

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div className={"wrapper"}
            style={wrapper}>
                <h1>Redux Example</h1>
                <Form/>
            </div>
            </Provider>
        )
    }
}
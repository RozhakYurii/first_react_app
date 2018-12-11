import React, {Component} from 'react';
import './App.css';
import TestTable from "./components/TestDataTable/TestTable";
import Background from "./components/Background/Background";
import MyNavbar from "./components/Navbar/MyNavbar";
import BsTable from "./components/TestDataTable/BsTable";
import Prediction from "./components/Prediction/Prediction";
import {Input} from "./components/Input/Input";

class App extends Component {


    constructor() {
        super();
        this.state = {
            route: "input"
        };
    };

    setRoute = (newRoute) => {
        this.setState(
            {
                route: newRoute
            }
        )
    };

    renderSwitch() {
        switch (this.state.route) {
            case 'input':
                return <Input/>;
            case 'prediction':
                return <Prediction/>;
            case 'table':
                return <TestTable/>;
            case 'bootstrapTable':
                return <BsTable/>;
            default:
                return <h2>KILL ME</h2>;
        }
    }

    render() {
        return (
            <div>
                <MyNavbar setRoute={this.setRoute}/>
                <Background/>
                {this.renderSwitch()}
            </div>
        );
    }
}

export default App;

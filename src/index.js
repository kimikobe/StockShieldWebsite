import React from 'react';
import ReactDOM from 'react-dom';
import {observer, inject} from "mobx-react";
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import MainPage from './components/MainPage';
import Root from './components/Root';
import AccountPage from './components/AccountPage';
import Login from './components/Login';

import MobxProvider from "./store/MobxProvider";
import StateStore from "./store/StateStore";
import './styles/styles.scss';

@inject("stateStore") @observer
class App extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      
      console.log(StateStore.isLogon);
      console.log(this.props.stateStore.isLogin);

        return (
            <Router>
              <div>
                <div className="nav">
                  <h1>StockShield</h1>
                  <ul className="header">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                  </ul>
                </div>
                <div className="content">
                  <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={MainPage}/>
                    <Route path="/stuff" component={Root}/>
                    <Route path="/contact" component={AccountPage}/>
                  </Switch>
                </div>
              </div>
            </Router>
        );
      }
}

ReactDOM.render(<MobxProvider view={<App />} />, document.getElementById('app'));
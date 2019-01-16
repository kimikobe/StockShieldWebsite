import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink, IndexRoute} from 'react-router-dom';
import {observer, inject} from "mobx-react";
import './styles/styles.scss';
import MainPage from './components/MainPage';
import AccountPage from './components/AccountPage';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
import MobxProvider from "./store/MobxProvider";
import StateStore from "./store/StateStore";
//import Logo from './StockShield.png';
//import searchLogo from './searchlogo.png';

@inject("stateStore") @observer
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    console.log(StateStore.isLogon);
    console.log(this.props.stateStore.isLogon);

        return (
            /*<Router>
              <div>

                <div className="menu">  

                    <img src='/src/img/StockShield.png' />
                    
                    <button className="menu_search"><img src='/src/img/searchlogo.png' /></button>

                    <form className="menu_search_form" method="POST">
                      <input className="menu_search_input" placeholder="Type and hit enter" />
                    </form>
                  </div> 

                  <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/account">My Account</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                  </ul>           
     
                <div className="content">       
                    <Route path="/" component={MainPage}/>
                    <Route path="/account" component={AccountPage}/>
                    <Route path="/product" component={ProductPage}/>
                </div>
              </div> 
            </Router>
            */
            

            <Router>
              <div>
                  <h1>StockShield</h1>
                  <ul className="header">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/account" activeStyle={{color: "red"}}>My Account</NavLink></li>
                    <li><NavLink to="/product" activeStyle={{color: "red"}}>Product</NavLink></li>
                    <li><NavLink to="/login" activeStyle={{color: "red"}}>Login</NavLink></li>
                  </ul>
                  <hr/>
                                        
                  <Route exact path="/" component={MainPage}/>                 
                  <Route path="/account" component={AccountPage}/>
                  <Route path="/product" component={ProductPage}/> 
                  <Route path="/login" component={LoginPage}/>              
              </div>           
            </Router>
                    );
                  }
            }

ReactDOM.render(<MobxProvider view={<App />} />, document.getElementById('app'));
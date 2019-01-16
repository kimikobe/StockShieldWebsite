import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink, IndexRoute} from 'react-router-dom';
import './styles/styles.scss';
import MainPage from './components/MainPage';
import Root from './components/Root';
import AccountPage from './components/AccountPage';
import Navigation from './components/Navigation';
import ProductPage from './components/ProductPage';
//import Logo from './StockShield.png';
//import searchLogo from './searchlogo.png';

class App extends React.Component {

    render() {
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
                    <li><NavLink to="/" activeStyle={{color: "red"}}>Home</NavLink></li>
                    <li><NavLink to="/account" activeStyle={{color: "red"}}>My Account</NavLink></li>
                    <li><NavLink to="/product" activeStyle={{color: "red"}}>Product</NavLink></li>
                  </ul>
                  <hr/>
                                        
                  <Route exact path="/" component={MainPage}/>                 
                  <Route path="/account" component={AccountPage}/>
                  <Route path="/product" component={ProductPage}/>
              
              </div>           
            </Router>
                    );
                  }
            }

ReactDOM.render(<App />, document.getElementById('app'));
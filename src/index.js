import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
//import './styles/styles.scss';
import MainPage from './components/MainPage';
import Root from './components/Root';
import AccountPage from './components/AccountPage';
import Navigation from './components/Navigation';

class App extends React.Component {

    render() {
        return (
            // <div>
            //     <div>
            //       <Navigation />
            //     </div>
            //     <div>
                  
            //       <Router>
            //         <Route path="/main" component={MainPage} />
            //         {/* <Route path="/mainhh" component={Root}/> */}
            //       </Router>
            //       <Router>
            //         <Route path="/account" component={AccountPage} />
            //       </Router>
            //     </div>
            // </div>
            <Router>
              <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/stuff">Stuff</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                  <Route path="/" component={MainPage}/>
                  <Route path="/stuff" component={Root}/>
                  <Route path="/contact" component={AccountPage}/>
                </div>
              </div>
            </Router>
        );
      }
}

ReactDOM.render(<App />, document.getElementById('app'));
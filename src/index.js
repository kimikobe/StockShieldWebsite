import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//import './styles/styles.scss';
import MainPage from './components/MainPage';
import Root from './components/Root';
import AccountPage from './components/AccountPage';

class App extends React.Component {

    render() {
        return (
          /*<div id="title" className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                    <MainPage/>
              </div>
            </div> 

            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Navigation/>
                </div>
            </div>  
          </div>*/
          <div>
            <BrowserRouter>
                <Route path="./" component={Root}/>
                <Route path="./AccountPage" component={AccountPage} />
                <Route path="./MainPage" component={MainPage} />
            </BrowserRouter>
          </div>
        );
      }
}

ReactDOM.render(<App />, document.getElementById('app'));
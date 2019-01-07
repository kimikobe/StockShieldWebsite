import React from 'react';
// import {Link} from 'react-router-dom';


export default class Navigation extends React.Component {

    render() {
        return (
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/account">My Account</Link></li> */}
                    <li><a href="">Document</a></li>
                    <li><a href="">Product</a></li>
                </ul>
              </div>
            </div>  
          </nav>
        );
      }
}

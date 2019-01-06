import React from 'react';

export default class Navigation extends React.Component {

    render() {
        return (
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Document</a></li>
                    <li><a href="">Product</a></li>
                </ul>
              </div>
            </div>  
          </nav>
        );
      }
}

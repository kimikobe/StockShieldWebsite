import React from 'react';

import Navigation from "./Navigation";
import MainPage from "./MainPage"

export default class Root extends React.Component{
    render(){
        return(
            <div className="container">
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
          </div>
        )
    }
}
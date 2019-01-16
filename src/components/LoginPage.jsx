import React from 'react';
import StateAction from '../action/StateAction';
import {observer, inject} from "mobx-react";

@inject("stateStore") @observer
export default class LoginPage extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }

    Login = () => {
        console.log("logon");
        if (this.state.userName == 'aaa' && this.state.password == '123456') {
            console.log("correct username");
            StateAction.setLogin();
            console.log(this.props.stateStore.isLogon);
            this.props.history.push('/home')
        }
    }

    onUserNameChange = (e) => {
        this.setState({userName: e.target.value});
    }

    onPwdChange = (e) => {
        this.setState({password: e.target.value});
    }

    render(){
        return(
            <div id="login-page">
                {/* <h1>StockShield</h1> */}
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.userName} onChange={this.onUserNameChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.onPwdChange}/>
                    </div>
                    {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary" onClick={this.Login}>Submit</button>
                </form>
            </div>
        )
    }

}
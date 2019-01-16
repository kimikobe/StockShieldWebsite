import React from 'react';
import {Provider} from 'mobx-react';
import GlobalStore from './GlobalStore';

export default class MobxProvider extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // const stateStore = new StateStore();
        return (
            <Provider stateStore={GlobalStore.stateStore}>
                {this.props.view}
            </Provider>
        );
    }
}

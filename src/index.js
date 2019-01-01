import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Profile from './components/Profile.jsx';

class App extends React.Component {

    render() {
        return (
          <div>
            <Profile />
          </div>
        );
      }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {

    render() {
        return (<div>
            <h1>Welcome to Bishibosh</h1>
            {this.props.children}
        </div>);
    }

}

export default connect(state => {return {currentUser: state.currentUser};})(App);

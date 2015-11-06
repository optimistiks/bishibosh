import React from 'react';
import {connect} from 'react-redux';


class App extends React.Component {

    render() {
        return (
            <div>
                {this.props.actionError ? <p>Error in action {this.props.actionError}</p> : null}
                {this.props.children}
            </div>
        );
    }

}

App.propTypes = {
    actionError: React.PropTypes.string
};

export default connect((state) => ({actionError: state.actionError}))(App);

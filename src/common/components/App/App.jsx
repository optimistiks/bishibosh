import React from 'react';
import {connect} from 'react-redux';


class App extends React.Component {

    render() {
        return (
            <div>
                {this.props.actionError.isError ? <p>Error in action {this.props.actionError.type}</p> : null}
                {this.props.children}
            </div>
        );
    }

}

App.propTypes = {
    actionError: React.PropTypes.shape({
        type: React.PropTypes.string,
        payload: React.PropTypes.any,
        isError: React.PropTypes.oneOf([true])
    })
};

export default connect((state) => ({actionError: state.actionError}))(App);

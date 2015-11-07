import React from 'react';
import {connect} from 'react-redux';


class App extends React.Component {

    render() {

        if (this.props.actionError.type) {
            console.error(this.props.actionError);
        }

        return (
            <div>
                {this.props.actionError.type ? <p>Error in
                    action {this.props.actionError.type} {JSON.stringify(this.props.actionError)}</p> : null}
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

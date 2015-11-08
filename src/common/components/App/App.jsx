// bootstrap only for grid & responsiveness
import '../../styles/bootstrap.min.css';
import '../../styles/styles.css';

import React from 'react';
import {connect} from 'react-redux';
import {Paper} from 'material-ui';
import Theme from '../../modules/ui-theme/index';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

class App extends React.Component {

    static get childContextTypes() {
        return {muiTheme: React.PropTypes.object};
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(Theme)
        };
    }

    render() {

        if (this.props.actionError.type) {
            console.error(this.props.actionError);
        }

        return (
            <Paper zDepth={0} rounded={false} className="container-paper">
                <div className="container-fluid">
                    <h1>Bishibosh</h1>
                    {this.props.actionError.type ? <p>Error in
                        action {this.props.actionError.type} {JSON.stringify(this.props.actionError)}</p> : null}
                    {this.props.children}
                </div>
            </Paper>
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

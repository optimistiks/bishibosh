import React from 'react';
import {connect} from 'react-redux';
import {History} from 'react-router';


const Protected = React.createClass({

    mixins: [History],

    componentWillMount() {
        if (!this.props.currentUser) {
            this.redirect();
        }
    },

    componentWillReceiveProps(nextProps) {
        if (!nextProps.currentUser) {
            this.redirect();
        }
    },

    redirect() {
        this.history.replaceState(null, '/login');
    },

    render() {
        return this.props.children;
    }

});

export default connect((state) => ({currentUser: state.currentUser}))(Protected);

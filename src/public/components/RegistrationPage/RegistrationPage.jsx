import React from 'react';
import {signUp} from '../../modules/action-creators/index';
import {connect} from 'react-redux';


class RegistrationPage extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(signUp(this.form.elements.username.value, this.form.elements.password.value));
    }

    render() {
        return (<div>
            <h2>Registration</h2>
            <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">Sign up</button>
            </form>
        </div>);
    }

}

export default connect()(RegistrationPage);

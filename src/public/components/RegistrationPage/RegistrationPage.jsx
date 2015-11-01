import React from 'react';


class RegistrationPage extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (<div>
            <h2>Registration</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Register</button>
            </form>
        </div>);
    }

}

export default RegistrationPage;

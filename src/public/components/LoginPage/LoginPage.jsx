import React from 'react';


class LoginPage extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (<div>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </div>);
    }

}

export default LoginPage;

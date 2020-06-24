import React from 'react';
import LoginForm from "../forms/LoginForm"

class LoginPage extends React.Component {3
    sumbit = data => {
        console.log(data);
    };
    
    render() {
        return(
            <div>
                <h1>Login Page</h1>
                 <LoginForm submit={this.submit}/>
            </div>
        );
    }
}


export default LoginPage;

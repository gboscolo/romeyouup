import * as React from 'react';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const responseFacebook = (response) => {
            console.log(response);
        }

        const responseGoogle = (response) => {
            console.log(response);
        }

        return (
            <div>

            <FacebookLogin
                appId="815947062330614" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
            />
            <GoogleLogin
                clientId="942691208666-ep58oqn5cbq83mhjiq001fsra60boj75.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
            );
    }
}
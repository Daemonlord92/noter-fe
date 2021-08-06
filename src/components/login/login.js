import React from "react";
import {
    Card, Button
} from 'reactstrap';
import axios from 'axios';
import Input from "reactstrap/es/Input";

class Login extends React.Component {
    state = {
        credentials: {
            email: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/v1/auth", this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                console.log(res.data)
                this.props.history.push("/notes");
                console.log(res);
            })
            .catch(err =>
                console.error("mjm: Login.js: login: err.message: ", err.message)
            );
    };

    render() {
        return (
            <Card>
                <form onSubmit={this.login}>
                    <Input
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    <Input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <Button>Log in</Button>
                </form>
            </Card>
        );
    }
}

export default Login;
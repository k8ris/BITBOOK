import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }



    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="LogInToFacebook">Log in to Facebook</h2>

                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email:</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            id='email'
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        onClick={!this.validateForm()}
                        type="submit"
                    >
                        Log In
          </Button>
                </form>
            </div>
        );
    }
}

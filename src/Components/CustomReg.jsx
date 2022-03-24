import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Component } from "react";
import { renderMatches } from "react-router-dom";

class Registration extends Component {
  state = {
    Registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    showComplete: false,
  };

  handleInput = (key, value) => {
    this.setState({
      Registration: {
        ...this.state.Registration,
        [key]: value,
      },
    });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
              minLength={2}
              value={this.state.Registration.name}
              onChange={(e) => this.handleInput("name", e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter surname"
              required
              minLength={2}
              value={this.state.Registration.surname}
              onChange={(e) => this.handleInput("surname", e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={this.state.Registration.email}
              onChange={(e) => this.handleInput("email", e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
              value={this.state.Registration.password}
              onChange={(e) => this.handleInput("password", e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
              value={this.state.Registration.confirmPassword}
              onChange={(e) =>
                this.handleInput("confirmPassword", e.target.value)
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default Registration;

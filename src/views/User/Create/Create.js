import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { isEmail } from 'validator';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert
} from 'reactstrap';

const invalidFirstNameMessage = (
  <Alert color="danger">
    Please enter first name
  </Alert>
);
const invalidFirstName = (invalidFirstNameMessage);

const invalidLastNameMessage = (
  <Alert color="danger">
    Please enter last name
  </Alert>
);
const invalidLastName = (invalidLastNameMessage);

const invalidEmailMessage = (
  <Alert color="danger">
    Please enter email as "abc@example.com"
  </Alert>
);
const invalidEmail = (invalidEmailMessage);

const invalidPasswordMessage = (
  <Alert color="danger">
    Please enter password of minimum length of 5
  </Alert>
);
const invalidPassword = (invalidPasswordMessage);

const invalidUserNameMessage = (
  <Alert color="danger">
    Please enter username
  </Alert>
);
const invalidUserName = (invalidUserNameMessage);

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      serverError: false,
      redirect: false,
      validFirstName: true,
      validLastName: true,
      validUserName: true,
      validEmail: true,
      validPassword: true
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  validateForm() {
    return this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0;
  };

  handleOnChange(event) {
    console.log('handleOnChange',event);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleOnClick() {
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const password = this.state.password;
    const username = this.state.username;

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      username: username
    };

    this.setState({
      validFirstName: this.state.firstname,
      validLastName: this.state.lastname,
      validEmail: isEmail(this.state.email),
      validPassword: (this.state.password.length >= 5),
      validUserName: (this.state.username.length)
    });

    if (isEmail(this.state.email) && this.state.password.length >= 5 && this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.state.username.length >= 0) {
      console.log('VALID FORM ERROR', data);
      this
        .props
        .Login(data)
        .then((response) => {
          console.log('response',response);
          // if (response.payload.status === 200) {
          //   const token = response.payload.data.token;
          //   const $window = window;
          //   $window
          //     .localStorage
          //     .setItem('auth-token', token);
          //   this.setState({ redirect: true });
          // } else {
          //   this.setState({ serverError: true });
          // }
      });
    }
  };

  onLoginSubmit(event) {
    event.preventDefault();
  };

  render() {
    return (
      <Col xs="12">
        <Card>
          <CardHeader>
            <i className="fa fa-edit"></i>
            User Registration Form
          </CardHeader>
          <CardBody>
            <form onSubmit={this.onLoginSubmit}>
              {/* <FormGroup> */}
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                </InputGroupAddon>
                <Input type="text" id="firstname" name="firstname" placeholder="Firstname" autoComplete="firstname" value={this.state.firstname} onChange={this.handleOnChange} />
              </InputGroup>
              <br></br>
              {this.state.validFirstName ? null : invalidFirstName}
              {/* </FormGroup>
              <FormGroup> */}
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                </InputGroupAddon>
                <Input type="text" id="lastname" name="lastname" placeholder="Lastname" autoComplete="lastname" value={this.state.lastname} onChange={this.handleOnChange} />
              </InputGroup>
              <br></br>
              {this.state.validLastName ? null : invalidLastName}
              {/* </FormGroup> */}
              {/* <FormGroup> */}
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                </InputGroupAddon>
                <Input type="email" id="email" name="email" placeholder="Email" autoComplete="email" value={this.state.email} onChange={this.handleOnChange} />
              </InputGroup>
              <br></br>
              {this.state.validEmail ? null : invalidEmail}
              {/* </FormGroup>
              <FormGroup> */}
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                </InputGroupAddon>
                <Input type="password" id="password" name="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={this.handleOnChange} />
              </InputGroup>
              <br></br>
              {this.state.validPassword ? null : invalidPassword}
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                </InputGroupAddon>
                <Input type="text" id="username" name="username" placeholder="Username" autoComplete="username" value={this.state.username} onChange={this.handleOnChange} />
              </InputGroup>
              <br></br>
              {this.state.validUserName ? null : invalidUserName}
              {/* </FormGroup>
              <FormGroup className="form-actions"> */}
              <Button type="submit" outline active size="md" disabled={!this.validateForm()} onClick={(e) => this.handleOnClick(event)} color="success">Submit</Button>
              {/* </FormGroup> */}
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Create;

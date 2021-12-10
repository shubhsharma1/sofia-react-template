import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Footer from "../../components/Footer/Footer.js";

// import loginImage from "../../assets/registerImage.svg";
import loginImage from "../../assets/rails.jpg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";
import { registerUser } from "../../actions/register.js";
import hasToken from "../../services/authService";

const Register = (props) => {
  const [state, setState] = useState({ email: '', password: '',cpass: '',mobile: ''} )

  const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const doRegister = (event) => {
    event.preventDefault();
    props.dispatch(registerUser({
      creds: state,
      history: props.history,
    }))
  }

  const { from } = props.location.state || { from: { pathname: '/template' } }

  if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Sign Up</p>
                <div className="logo-block">
                  {/* <SofiaLogo />
                  <p className="mb-0">Fake Reservations</p> */}
                </div>
              </div>
              {/* <div className="auth-info my-2">
                <p>This is a real app with Node.js backend - use <b>"admin@flatlogic.com / password"</b> to login!</p>
              </div> */}
              <form onSubmit={(event => doRegister(event))}>
                <FormGroup className="my-3">
                  <FormText>Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    type="email"
                    required
                    name="email"
                    placeholder="Enter Your Email ID"
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Password</FormText>
                    {/* <Link to="/error">Forgot password?</Link> */}
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={state.password}
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="password"
                    placeholder="Place Your Password "
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Confirm Password</FormText>
                    {/* <Link to="/error">Forgot password?</Link> */}
                  </div>
                  <Input
                    id="cpass"
                    className="input-transparent pl-3"
                    value={state.cpass}
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="cpass"
                    placeholder=" Confirm Your Password "
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Phone No</FormText>
                    {/* <Link to="/error">Forgot password?</Link> */}
                  </div>
                  <Input
                    id="mobile"
                    className="input-transparent pl-3"
                    value={state.mobile}
                    onChange={(event => changeCred(event))}
                    type="number"
                    required
                    name="mobile"
                    placeholder=" Enter Your Phone No "
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button className="rounded-pill my-3" type="submit" color="secondary-red">Sign Up</Button>
                </div>
                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                <div className="d-flex align-items-center my-3">
                  <p className="social-label mb-0">Already have an account ? 
                  <Link to="/login"> Login here</Link></p>
                </div>
           
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage}  className="w-100"  alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));

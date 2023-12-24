import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import HorizonLine from "../components/HorizonLine";
const SignInModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="text" placeholder="Enter Email" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control required type="text" placeholder="Password" />
            </Form.Group>
            <br />

            <Button block variant="info" type="button" className="my-3">
              Sign In
            </Button>
            <HorizonLine text={"OR"} />
            <GoogleLogin
              render={(renderProps) => {
                return (
                  <Button
                    block
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{
                      backgroundColor: "#176BEF",
                      borderColor: "176BEF",
                    }}
                  >
                    <i className="fab fa-google">&nbsp; Sing In With Google</i>
                  </Button>
                );
              }}
            />
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;

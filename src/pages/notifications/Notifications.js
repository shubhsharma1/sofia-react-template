import React, { useState } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
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
import Code from "../../components/Code/Code.js";
import loginImage from "../../assets/rails.jpg";
import Notification from "../../components/Notification/Notification.js";
import s from "./Notifications.module.scss";
import successIcon from "../../assets/notificationsIcons/successIcon.svg";
import closeIcon from "../../assets/notificationsIcons/closeIcon.svg";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT
];

const notificationTypes = ["info", "success", "warning", "error"]

const Notifications = function () {

  const [notificationPosition, setNotificationPosition] = useState(2)

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId)
  }

  const getRandomNotification = () => {
    return notificationTypes[Math.floor(Math.random()*notificationTypes.length)]
  }

  const options = {
    autoClose: 4000,
    closeButton: false,
    hideProgressBar: true,
    position: positions[notificationPosition],
  };

  return (
    <div>
      <Row className="gutter mb-4">
        <Col xs={12} lg={12}>
          <Widget className="widget-p-md">
            <div className="headline-2">Book Flights, Hotels and Holiday Packages</div>
            <div className={s.widgetText}>Flight booking, cheap air tickets of domestic & international airlines with Fake Reservations</div>
            <form >
            <Container fluid="xxl">
          <Row>
            <Col sm> 
             <FormGroup className="my-3">
                <FormText>Source Address</FormText>
                <Input
                  id="email"
                  className="input-transparent pl-3"
                  // value={state.email}
            
                  type="text"
                  required
                  name="source"
                  placeholder="Enter Source Address"
                />
              </FormGroup></Col>
              <Col sm>  <FormGroup className="my-3">
                <FormText>Destination Address</FormText>
                <Input
                  id="email"
                  className="input-transparent pl-3"
                  // value={state.email}
            
                  type="email"
                  required
                  name="email"
                  placeholder="Enter Destination Address"
                />
              </FormGroup></Col>
            <Col sm >  <FormGroup className="my-3">
                <FormText>Date of Journey</FormText>
                <Input
                  id="email"
                  className="input-transparent pl-3"
                  // value={state.email}
            
                  type="date"
                  required
                  name="email"
                  placeholder="Enter Your Email ID"
                />
              </FormGroup></Col>
       
          </Row>
        </Container>


           
             
              <div className="bg-widget d-flex ">
                
                <Button className="rounded-pill my-3" type="submit" color="secondary-red">Create a Reservation</Button>
              </div>
             
              
            </form>
          </Widget>
        </Col>
    
      </Row>
    
    </div>
  )
}

export default Notifications;


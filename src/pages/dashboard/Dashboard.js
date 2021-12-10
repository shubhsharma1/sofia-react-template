import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";

import meal1 from "../../assets/dashboard/meal-1.svg";
import meal2 from "../../assets/dashboard/meal-2.svg";
import meal3 from "../../assets/dashboard/meal-3.svg";
import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import therapyIcon from "../../assets/dashboard/therapyIcon.svg";
import user from "../../assets/user.svg";
import statsPie from "../../assets/dashboard/statsPie.svg";

import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const [checkboxes, setCheckboxes] = useState([true, false])

  const toggleCheckbox = (id) => {
    setCheckboxes(checkboxes => checkboxes
      .map((checkbox, index) => index === id ? !checkbox : checkbox ))
  }

  const meals = [meal1, meal2, meal3];

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={12}>
          <Row className="gutter mb-4">
       
            <Col xs={12} md={12}>
              <Widget className="widget-p-md">
                <div className="d-flex justify-content-between">
                  <div className="headline-3 d-flex align-items-center">Your Journey Reservations</div>
                  {/* <UncontrolledDropdown>
                    <DropdownToggle caret>
                      &nbsp; Weekly &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Daily</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </div>
                {meals.map((meal) =>
                  <div key={uuidv4()} className={`mt-4 ${s.widgetBlock}`}>
                    <div className={s.widgetBody}>
                      <div className="d-flex">
                        {/* <img className="img-fluid mr-2" src={meal} alt="..." /> */}
                        <div className="d-flex flex-column">
                          <p className="body-2">Source Address</p>
                          
                          <p className="body-3 muted">Bhopal Madhya Pradesh 462001</p>
                        </div>
                      </div>
                      <div className="d-flex flex-column">
                      <p className="body-2">Destination Address</p>
                        Pune Maharashtra 
                      </div>
                      <div className="d-flex flex-column">
                      <p className="body-2">Journey Date</p>
                        31/12/2021 
                      </div>
                    </div>
                  </div>
                )}
              </Widget>
            </Col>
          </Row>
     
    
        </Col>
     
      </Row>
    </div>
  )
}

export default Dashboard;

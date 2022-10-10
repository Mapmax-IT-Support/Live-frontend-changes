import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import Button from "react-bootstrap/Button";
import * as selectors from "../../Reducers/selectors";
import "../../css/listingView.scss";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "../../css/App.scss";
import MissionImage from "../../images/backgrounds/comingSoon.jpg";
import "./../../css/mission.scss";

export default function ResidentialUsers() {
  return (
    <div>
      <div className="missionImg">
        <h1>
          The Residential users Page is being developed. Please stay tuned
        </h1>
        <img className="missionLogo" src={MissionImage} alt="missionLogo" />;
      </div>
    </div>
  );
}

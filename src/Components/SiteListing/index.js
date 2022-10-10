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
// <i class="fas fa-globe"></i>

const darkBg = "rgb(26,28,41)";
const lightBg = "rgb(31,33,48)";
const textPrimary = "whitesmoke";

class SiteListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      index: 0,
      limit: 20,
    };
  }

  handleAddListing = () => {
    this.props.history.push("/addlisting");
  };

  render() {
    return (
      <div className="SiteListingContainer">
        <Button
          className="siteListingButton"
          variant="none"
          style={{ border: 0 }}
          onClick={this.handleAddListing}
        >
          Add Listing
        </Button>
      </div>
    );
  }
}

const InfoPanel = (props) => {
  return (
    <div className="infoPanel">
      <h3>{props.title}</h3>
      <div>
        <FontAwesomeIcon icon={props.icon} size="3x" color="white" />
      </div>
      <p>{props.subtitle}</p>
    </div>
  );
};

const mapStateToProps = createSelector(
  selectors.addressSelector,
  selectors.userSelector,
  (address, user) => ({
    address,
    user,
  })
);

export default withRouter(connect(mapStateToProps)(SiteListing));

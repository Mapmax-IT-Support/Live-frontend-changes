import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineInfoCircle, } from "react-icons/ai";
import { HiOutlineInformationCircle } from 'react-icons/hi'
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as selectors from "../../Reducers/selectors";
import { createSelector } from "reselect";
import { updateUser } from "../../Actions/user-actions";
import white_smaple from "../../images/logo/spiral.png";
import NavLookUpForm from "./NavLookUpForm";
import MediaQuery from "react-responsive";
import SiteListing from "../SiteListing";
import RecentListings from "../Listings/ListingPreviews/RecentListings";
import History from "../History";
import Mission from "../Mission";
import AddViewListing from "../Listings/AddListing/AddViewListing";
import Modal from "react-bootstrap/Modal";
import AutoCompleteBar from "../AutoCompleteBar";
import { getListingByPlaceId } from "../../Requests/listings-requests";
import BusinessModal from "./BusinessAndRssidentailsModals/Businessmodal";
import ResidentialModal from "./BusinessAndRssidentailsModals/ResidentialModal";


const InfoButton = (props) => {
  const [clicked, setClicked] = useState(false);
  let color = "black";

  if (clicked) {
    //   color = 'rgba(255,255,255,0.5'
  } else color = "black";

  let style = { color: color, float: "right" };

  return (
    <AiOutlineInfoCircle
      onClick={(e) => [setClicked(!clicked), props.clickFunction()]}
      style={style}
    />
  );
};

const Modal_goodVisibility = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How to Interpret Data for Residential Users
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>Yet to be updated</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBusinessModal: false,
      showResidentialModal: false
    };
  }

  onUpdateUser = (user) => {
    this.props.onUpdateUser(user);
  };

  logout = () => {
    this.props.history.push("/login");
    let user = { _id: -1, username: "guest", is_admin: false };
    this.onUpdateUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  login = () => {
    this.props.history.push("/login");
  };

  goToSearches = () => {
    this.props.history.push("/profile");
  };

  goToAddListing = () => {
    this.props.history.push("/addlisting");
  };

  navigateHome = () => {
    this.props.history.push("/");
  };
  setModalShow = (field, flag) => {
    this.setState({ [field]: flag });
  };



  loadListing = async () => {
    let res = await getListingByPlaceId(this.props.address.place.place_id);
    if (res === undefined) return;
    if (res.length > 0) {
      this.setState({ hasListing: true, listing: res[0] });
    }
  };

  // loadListing = async () => {
  //   let res = await getListingByPlaceId(this.props.address.place.place_id);
  //   if (res === undefined) return;
  //   if (res.length > 0) {
  //     this.setState({ hasListing: true, listing: res[0] });
  //   }
  // };

  async componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.initCache();
    await this.loadListing();

    if (this.props.isFirstTimeUser) {
      this.props.updateIsFirstTime(false);
      if (window.innerWidth > 550) {
        this.props.runJoyRideTutorial();
      }
    }
  }

  // async componentDidUpdate(prevProps, prevState) {

  //   if (
  //     this.props.active_place &&
  //     this.props.active_place !== prevProps.active_place
  //   )
  //     if (this.props.active_place.toString().length > 0) {
  //       this.setState({ center: this.props.active_place.geometry.location });

  //       if (prevProps.active_place.toString().length > 0) {
  //         this.updateMarker(
  //           this.state.markers.get(prevProps.active_place.place_id)
  //         );
  //       }
  //       this.state.markers
  //         .get(this.props.active_place.place_id)
  //         .marker.setIcon(GREEN_MARKER);
  //       google.maps.event.trigger(
  //         this.state.markers.get(this.props.active_place.place_id).marker,
  //         "click"
  //       );
  //     }
  // }

  render() {
    return (
      <Navbar className="navBar" expand="lg">
        <div className="logo_container" onClick={this.navigateHome}>
          <div className="fluid_image_logoContainer">
            <Image src={white_smaple} fluid className="fluid_image_logo" />
          </div>
          <MediaQuery minDeviceWidth={400}>
            <Link to="/" className="logoLinkText">
              Mapmax
              {!this.props.displaySearchBar && (
                <>
                  {" "}
                  <br></br>
                  <a className="logoSublinkText">
                    {" "}
                    Real Estate Consultation For All
                  </a>
                </>
              )}
            </Link>
          </MediaQuery>
        </div>
        {this.props.displaySearchBar && (
          <NavLookUpForm urlParams={this.props.urlParams} width="90%" />
        )}

        <div class="topnav-right">
          <div className="user_tools">
            {this.props.displayResidentialUsers && (
              <>
                {/* <a className="tutorialLink" 
                    > */}
                <Button
                  className="toolbar_button"
                  variant="none"
                  onClick={this.props.runJoyRideTutorial}

                >
                  <div style={{ display: 'flex' }}>
                    Map Page<br />
                    Tutorial
                    <AiOutlineInfoCircle className="info-icon" color="black" style={{ marginTop: '15px' }} />
                  </div>
                </Button>
              </>
            )}
            {!this.props.displayHistoryButton && (
              <>
                <a className="missionLink">
                  <Link to="/mission"> Mission</Link>
                </a>
              </>
            )}
            {!this.props.displayHistoryButton && (
              <>
                <a className="historyLink">
                  <Link to="/history"> History & Intent </Link>
                </a>
              </>
            )}
            <span className="diffUserButtons">



              {this.props.displayBusinessUsers && (
                <>
                  <div
                    className="busButton"
                    onClick={() => this.setModalShow('showBusinessModal', true)}
                  >
                    {" "}
                    Interpret Data <br></br> Business Users

                    <AiOutlineInfoCircle className="info-icon" />
                    {/* <a className="infoButton">  <InfoButton /></a> */}

                  </div>

                  <BusinessModal
                    show={this.state.showBusinessModal}
                    onHide={() => this.setState({ showBusinessModal: false })}
                    showModal={() => this.setState({ showBusinessModal: true })}

                  />
                </>
              )}


              <div className="resButton">
                {this.props.displayResidentialUsers && (
                  <>
                    <div
                      className="busButton"
                      onClick={() => this.setModalShow('showResidentialModal', true)}
                    >
                      Interpret Data <br></br> Residential Users

                      <AiOutlineInfoCircle className="info-icon" />

                    </div>

                    <ResidentialModal
                      show={this.state.showResidentialModal}
                      onHide={() => this.setState({ showResidentialModal: false })}
                      showModal={() => this.setState({ showResidentialModal: true })}
                    />
                  </>
                )}


              </div>
            </span>

            {/* <RecentListings /> */}
            {/* <SiteListing /> */}
            <a className="historyLink">
              <Link to="/addviewlistings">Add/View Listings</Link>
            </a>
            <NavBarDropDown
              user={this.props.user}
              logout={this.logout}
              login={this.login}
              goToSearches={this.goToSearches}
              goToAddListing={this.goToAddListing}
            />
          </div>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = createSelector(selectors.userSelector, (user) => ({
  user,
}));

const mapActionsToProps = {
  onUpdateUser: updateUser,
};

const NavBarDropDown = (props) => {
  let title, signIn;

  if (props.user._id === -1) {
    return (
      <Link to="/login" style={{ color: "black" }}>
        Sign in
      </Link>
    );
  } else {
    title = (
      <span style={{ color: "black" }}>Welcome, {props.user.first} </span>
    );
    signIn = (
      <NavDropdown.Item onClick={props.logout}>Sign Out</NavDropdown.Item>
    );

    return (
      <Fragment>
        <MediaQuery minDeviceWidth={551}>
          <NavDropdown title={title}>
            <NavDropdown.Item onClick={props.goToSearches}>
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Item onClick={props.goToAddListing}>
              Add listing
            </NavDropdown.Item>
            {signIn}
          </NavDropdown>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={551} minDeviceWidth={370}>
          <DropdownButton
            menuAlign="right"
            id="mobileDropdown"
            title={<FontAwesomeIcon icon={faUser} />}
          >
            <NavDropdown.Item onClick={props.goToSearches}>
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Item onClick={props.goToAddListing}>
              Add listing
            </NavDropdown.Item>
            {signIn}
          </DropdownButton>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={370}>
          <DropdownButton menuAlign="right" id="mobileDropdown">
            <NavDropdown.Item onClick={props.goToSearches}>
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Item onClick={props.goToAddListing}>
              Add listing
            </NavDropdown.Item>
            {signIn}
          </DropdownButton>
        </MediaQuery>
      </Fragment>
    );
  }
};

export default withRouter(
  connect(mapStateToProps, mapActionsToProps)(NavigationBar)
);

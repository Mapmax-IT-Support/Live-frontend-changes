import React ,{useState} from "react";
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
import NavigationBar from "../Navigation/NavigationBar";
import "../../css/navigation.scss";
import Modal from "react-bootstrap/Modal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const InfoButton = (props) => {
  const [clicked, setClicked] = useState(false);
  const [showWhatWeDoModal, setShowWhatWeDoModal] = useState(false);
  const [showBusinessLocationNeeds, setShowBusinessLocationNeeds] = useState(false);
  const [showResedentialNeeds, setShowResedentialNeeds] = useState(false);
  const [showListingsModal, setShowListingsModal] = useState(false);
  const [showRetoneCommunityModal, setShowRetoneCommunityModal] = useState(false)


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

// const MyVerticallyCenteredModalResidential = (props) => {


//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Mapmax Mission
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h3 style={{ fontSize: "20px" }}>Yet to be updated</h3>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

const Modal_whatwedo = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          What we do
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>Mapmax gives small business owners the analytical tools necessary to make the same kind of
          informed location decisions that major corporations have at their disposal. It also gives individuals and
          families information from which to better choose a new home.
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Modal_BusNeeds = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Business Location Needs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>A successful retail business depends on a good product, competent management and a great
          location. Thus, selecting the right location is the foundation to building a successful retail enterprise or
          professional office site. With many products and services available online, and many different physical
          spaces available, the selection of a prime location upon which to build a brick-and-mortar establishment
          becomes more vital than ever before. Mapmax analyses the visibility and accessibility of a location and
          takes into consideration the neighboring retail that will generate customers and/or compete for their
          business. It also gives business owners insight into community trade zone demographics that have the
          highest potential to provide and establish a loyal customer base.

        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


const Modal_ResNeeds = (props) => {
  const [showExamples,setShowExamples]=useState(false)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton  className="px-4">
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          Residential Needs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>When the global Covid pandemic hit in 2020 it created extensive movement among residential home owners and renters, 
        Mapmax realized a need to provide geographical information about potential new home locations to individuals and families as well. When searching for a new house or apartment, 
        helpful information includes the home’s proximity to work, transportation, needed services and retail stores.
        </h3>
        <Button onClick={()=>setShowExamples(!showExamples)}>Examples</Button>
        {showExamples&&<h3 style={{ fontSize: "20px" }}>
          These may include supermarkets, pharmacies, restaurants, barbers, salons, hospitals, doctors, dentists, and veterinarians. Also for consideration are the location’s proximity to schools, 
          places of worship, and recreational facilities such as parks and gyms. A community’s culture is key. For example, a family with young children may want to find a community where there are many other 
          young children in the neighborhood for their kids to play with and befriend.
          </h3>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
const Modal_Retone = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          RETONE - your community
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>Mapmax provides demographics, aerials, mapping images, existing neighborhood businesses,
          services and site photographs. A unique and proprietary software called RETONE analyses demographic
          and geographical information specific to the community surrounding the location chosen. RETONE
          provides a comprehensive look into the customer base and residential community to highlight the
          strength of demographic diversity and opportunity.


        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
const Modal_Listings = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Listings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>There is also a listing component to list and view available locations. There is never a fee to use.

        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

 const Mission =()=>{
  const [showWhatWeDoModal, setShowWhatWeDoModal] = useState(false);
  const [showBusinessLocationNeeds, setShowBusinessLocationNeeds] = useState(false);
  const [showResedentialNeeds, setShowResedentialNeeds] = useState(false);
  const [showListingsModal, setShowListingsModal] = useState(false);
  const [showRetoneCommunityModal, setShowRetoneCommunityModal] = useState(false)
  return (

    <div class="mission-section  alignfull mission-py-lg mission-section--auto">
      <NavigationBar />
      <h1 class="missionHeader mission-heading__h1" id="missionHeader">Mapmax</h1>
      <div class="mission-spacer  mission-pb-md" id="spacer-ZLsqtN">

        <p class="missionHeader mission-heading__h1" id="missionHeader">
          The mission of Mapmax is to provide free real estate location decision making intelligence to
          small businesses and individual buyers, sellers and renters.
        </p>



        <div className="missionBoxContainers mBox-1">
          <Modal_whatwedo
            show={showWhatWeDoModal}
            onHide={() => setShowWhatWeDoModal(false)} />
          <p
            onClick={() => setShowWhatWeDoModal(true)}> What we do
            <AiOutlineInfoCircle className="info-icon-mission" color="black" />
          </p>
        </div>

        <div className="missionBoxContainers mBox-2">
          <Modal_BusNeeds
            show={showBusinessLocationNeeds}
            onHide={() => setShowBusinessLocationNeeds(false)} />
          <p
            onClick={() => setShowBusinessLocationNeeds(true)}> Business Location Needs
            <AiOutlineInfoCircle className="info-icon-mission" color="black" />
          </p>
        </div>


        <div className="missionBoxContainers mBox-3">
          <Modal_ResNeeds
            show={showResedentialNeeds}
            onHide={() => setShowResedentialNeeds(false)} />
          <p
            onClick={() => setShowResedentialNeeds(true)}> Residential Needs
            <AiOutlineInfoCircle className="info-icon-mission" color="black" />
          </p>
        </div>

        <div className="missionBoxContainers mBox-4">
          <Modal_Retone
            show={showRetoneCommunityModal}
            onHide={() => setShowRetoneCommunityModal(false)} />
          <p
            onClick={() => setShowRetoneCommunityModal(true)}> RETONE - your community
            <AiOutlineInfoCircle className="info-icon-mission" color="black" />
          </p>
        </div>



        <div className="missionBoxContainers mboxCenter mBox-5">
          <Modal_Listings
            show={showListingsModal}
            onHide={() => setShowListingsModal(false)} />
          <p
            onClick={() => setShowListingsModal(true)}> Listings
            <AiOutlineInfoCircle className="info-icon-mission" color="black" />
          </p>
        </div>



      </div>

      <div
      >
        <h1 class="missionHeader mission-heading__h1" id="missionHeader"> Mapmax provides the intelligence of visiting, exploring and analyzing new locations in a
          couple of clicks and it’s free!
        </h1>
      </div>
    </div>

  );

}


export default Mission;
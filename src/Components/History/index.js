import React , {useState} from "react";
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
import HistoryImage from "../../images/backgrounds/comingSoon.jpg";
import "./../../css/history.scss";
import NavigationBar from "../Navigation/NavigationBar";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";


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


const Modal_FoundingHistory = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Founding History
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>Our founder began her commercial real estate career finding locations for small businesses and
          soon progressed into retail site selection and deal making for several Fortune 500 US corporations.
          These large corporations demanded rapid expansion of company owned and operated chain stores in
          locations that guaranteed a high likelihood of success. The work entailed a high level of detailed analysis
          of selected real estate and surrounding areas.</h3>
        <br />
        <h3 style={{ fontSize: "20px" }}>
          As a corporate site selector and deal maker in New York City (with emphasis in Manhattan),
          then in Long Island and throughout the domestic US and eventually into global markets, a methodology
          of location analysis developed. This methodology entailed recognizing, collecting and analyzing
          pertinent information about each new proposed location in order to predict its economic potential. In
          order to ascertain this, an analysis of individual site characteristics, review of trade zone demographics,
          examination of business generating influences, as well as competitive features needed to be considered.
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};



const Modal_smallBusiness = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Giving Small Businesses Tools
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>The fundamental methodology of successful commercial site selection is strikingly similar
          throughout the world. After completing these corporate assignments our founder had an epiphany. The
          differences between the way large corporations and small business owners selected their real estate
          locations were staggering.</h3>
        <br />
        <h3 style={{ fontSize: "20px" }}>
          Well financed large corporations collect a wealth of research in order to analyze the viability of a
          potential location, while conversely, most independent small businesses rely on guesswork and chance.
          The difficulty for many small business owners is that although they are experts in making and selling
          their products; they are not specifically trained for site selection of commercial real estate. In contrast
          major companies have teams of real estate professions especially trained to select successful locations.
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};




const Modal_Intent = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Intent
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>The idea for Mapmax was born. If one would provide a service for small business owners that
          incorporated the same methodology for site selecting that large corporations use, they would have the
          same tools for predicting a successful location as the major retail chains.
        </h3>
        <br />
        <h3 style={{ fontSize: "20px" }}>
          Mapmax’s founder took a methodology of site selection, based on training, observation and
          experience, and created a digital platform of analysis for the selection of great real estate locations.

        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


const Modal_ResTools = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Residential Tools
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>This concept was actively in creation in 2020 when the global pandemic Covid-19 closed down much of the world. As remote work popularized a mass exodus from cities into suburbs and remote areas, our founder realized an additional and complementary need to give individuals and families information to help make informed decisions about where to live. Millions of people searched for new places to live without being able to travel to new areas in order to fully investigate them.
        </h3>
        <br />
        <h3 style={{ fontSize: "20px" }}>
          There continue to be many benefits to gaining relevant information while researching for a new home location without spending a lot of time, money and energy. Once prospects are significantly narrowed down an on-site physical investigation is always wise, however, before making a final decision.

        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Modal_HowResInfo = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How to use Residential Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>Mapmax compiles pertinent information and analysis for prospective home owners or renters
          so that they can save time and money while making informed decisions. The relevant information is
          similar to what major retail businesses use when making a decision about where to locate their stores.
          Residential users just need to interpret the data differently because they value different elements of the
          information. This is where the “Interpret Data” icons on the toolbar of the platform’s map page will
          assist.
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};






const Modal_ListingInfo = (props) => {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lisitng Section
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ fontSize: "20px" }}>In addition, Mapmax has a listing section, where perspective sellers, buyers and renters can list
          and view available locations, both commercial and residential, free of charge. There is never a subscription or commission fee charged by Mapmax.
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


function History (){
  const [showFoundingHistoryModal, setShowFoundingHistoryModal] = useState(false);
  const [showBusinessToolsModal, setShowBusinessToolsModal] = useState(false);
  const [showIntentModal, setShowIntentModal] = useState(false);
  const [showResToolsModal, setShowResToolsModal] = useState(false)
  const [showResInterModal, setShowResInterModal] = useState(false);
  const [showListingSectionModal, setShowListingSectionModal] = useState(false)
  return (

    <div class="history-section  alignfull history-py-lg history-section--auto">
      <NavigationBar />
      <h1 class="historyHeader history-heading__h1" id="historyHeader">Mapmax- History and Intent </h1>

      <div class="history-spacer  history-pb-md" id="spacer-ZLsqtN">

        <div className="historyBoxContainers mBox-1">
          <Modal_FoundingHistory
            show={showFoundingHistoryModal}
            onHide={() => setShowFoundingHistoryModal(false)} />
          <p
            onClick={() => setShowFoundingHistoryModal(true)}> Founding History
            <AiOutlineInfoCircle className="info-icon-history" color="black" />
          </p>
        </div>


        <div className="historyBoxContainers mBox-2">
          <Modal_smallBusiness
            show={showBusinessToolsModal}
            onHide={() => setShowBusinessToolsModal(false)} />
          <p
            onClick={() => setShowBusinessToolsModal(true)}>Business Tools
            <AiOutlineInfoCircle className="info-icon-history" color="black" />
          </p>
        </div>


        <div className="historyBoxContainers mBox-3">
          <Modal_Intent
            show={showIntentModal}
            onHide={() => setShowIntentModal(false)} />
          <p
            onClick={() => setShowIntentModal(true)}> Intent for small businesses
            <AiOutlineInfoCircle className="info-icon-history" color="black" />
          </p>
        </div>
        <br />

        <div className="historyBoxContainers mBox-4">
          <Modal_ResTools
            show={showResToolsModal}
            onHide={() => setShowResToolsModal(false)} />
          <p
            onClick={() => setShowResToolsModal(true)}> Residential Tools
            <AiOutlineInfoCircle className="info-icon-history" color="black" />
          </p>
        </div>

        <div className="historyBoxContainers mBox-5">
          <Modal_HowResInfo
            show={showResInterModal}
            onHide={() => setShowResInterModal(false)} />
          <p
            onClick={() => setShowResInterModal(true)}> Residential Interpretation
            <AiOutlineInfoCircle className="info-icon-history" color="black" />
          </p>
        </div>

        <div className="historyBoxContainers mBox-6">
          <Modal_ListingInfo
            show={showListingSectionModal}
            onHide={() => setShowListingSectionModal(false)} />
          <p
            onClick={() => setShowListingSectionModal(true)}> Listing section
            <AiOutlineInfoCircle className="info-icon-history" color="black" />
          </p>
        </div>


      </div>
      <a class="historySubFooter history-Subheading__h1" id="historySubFooter"> Mapmax is a free informative service designed to maximize a business’s potential to select successful
        locations and to help individuals and families make informed decisions about where to live, work and
        travel.
      </a>
      <h1 class="historyHeader history-heading__h1" id="historyHeader">Everyone can benefit from Mapmax and it’s free!</h1>
    </div>

  );
}


// class History extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   setModalShow = (flag) => {
//     this.setState({ showModal: flag });
//   };


//   render() {
//     return (

//       <div class="history-section  alignfull history-py-lg history-section--auto">
//         <NavigationBar />
//         <h1 class="historyHeader history-heading__h1" id="historyHeader">Mapmax- History and Intent </h1>

//         <div class="history-spacer  history-pb-md" id="spacer-ZLsqtN">

//           <div className="historyBoxContainers mBox-1">
//             <Modal_FoundingHistory
//               show={this.state.showModal}
//               onHide={() => this.setState({ showModal: false })} />
//             <p
//               onClick={() => this.setModalShow(true)}> Founding History
//               <AiOutlineInfoCircle className="info-icon-history" color="black" />
//             </p>
//           </div>


//           <div className="historyBoxContainers mBox-2">
//             <Modal_smallBusiness
//               show={this.state.showModal}
//               onHide={() => this.setState({ showModal: false })} />
//             <p
//               onClick={() => this.setModalShow(true)}>Business Tools
//               <AiOutlineInfoCircle className="info-icon-history" color="black" />
//             </p>
//           </div>


//           <div className="historyBoxContainers mBox-3">
//             <Modal_Intent
//               show={this.state.showModal}
//               onHide={() => this.setState({ showModal: false })} />
//             <p
//               onClick={() => this.setModalShow(true)}> Intent for small businesses
//               <AiOutlineInfoCircle className="info-icon-history" color="black" />
//             </p>
//           </div>
//           <br />

//           <div className="historyBoxContainers mBox-4">
//             <Modal_ResTools
//               show={this.state.showModal}
//               onHide={() => this.setState({ showModal: false })} />
//             <p
//               onClick={() => this.setModalShow(true)}> Residential Tools
//               <AiOutlineInfoCircle className="info-icon-history" color="black" />
//             </p>
//           </div>

//           <div className="historyBoxContainers mBox-5">
//             <Modal_HowResInfo
//               show={this.state.showModal}
//               onHide={() => this.setState({ showModal: false })} />
//             <p
//               onClick={() => this.setModalShow(true)}> Residential Interpretation
//               <AiOutlineInfoCircle className="info-icon-history" color="black" />
//             </p>
//           </div>

//           <div className="historyBoxContainers mBox-6">
//             <Modal_ListingInfo
//               show={this.state.showModal}
//               onHide={() => this.setState({ showModal: false })} />
//             <p
//               onClick={() => this.setModalShow(true)}> Listing section
//               <AiOutlineInfoCircle className="info-icon-history" color="black" />
//             </p>
//           </div>


//         </div>
//         <a class="historySubFooter history-Subheading__h1" id="historySubFooter"> Mapmax is a free informative service designed to maximize a business’s potential to select successful
//           locations and to help individuals and families make informed decisions about where to live, work and
//           travel.
//         </a>
//         <h1 class="historyHeader history-heading__h1" id="historyHeader">Everyone can benefit from Mapmax and it’s free!</h1>
//       </div>

//     );
//   }
// };

export default History;
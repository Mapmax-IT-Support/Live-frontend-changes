import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { AiOutlineInfoCircle, } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import {residentialOtherConsiderationsModalBody,residentialRetoneModalBody} from './constants'
import CommonModal from '../CommonModal/CommonModal';

const ResidentialModal = (props) => {
  const [showRetoneModal, setShowRetoneModal] = useState(false);
  const [showOtherConsiderationsModal, setShowOtherConsiderationsModal] = useState(false)
  const showOnlyChildModal = (setShowChildModal) => {
    props.onHide();
    setShowChildModal(true)

  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Interpret Data: Residential Users
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p>
            What you want in a home is an individual choice. Mapmax gives you information
            so that you can choose the location best suited to your personal needs.

          </p>
          <br />
          <p>
            When it comes to selecting a home for comfort or investment, the old adage is
            true: “The three most important factors in choosing a home are location, location,
            location.”
          </p>
          <br />
          <p>
            Most homeowners and renters will want:
            <br />
          </p>
          <p>
            Good commute to work
            <br />
          </p>
          <p>
            Strong school systems
            <br />
          </p>
          <p>
            Nearby shopping and restaurants
            <br />
          </p>
          <p></p>
          Close proximity to needed services like doctors, dentists and hospitals
          <br />
          <p>
            Nearby parks, gyms, recreational facilities
            <br />
          </p>
          <p>
            Safety and quite
          </p>

          <div className="historyBoxContainers mBox-1"> RETONE
            <p
              onClick={() => showOnlyChildModal(setShowRetoneModal)}>
              <AiOutlineInfoCircle className="info-icon-history" color="black" />
            </p>
          </div>
          <div className="historyBoxContainers mBox-2"> Other considerations
            <p
              onClick={() => showOnlyChildModal(setShowOtherConsiderationsModal)}>
              <AiOutlineInfoCircle className="info-icon-history" color="black" />
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      <CommonModal
        heading="Residential Users"
        body={residentialRetoneModalBody}
        show={showRetoneModal}
        onHide={() => {
          setShowRetoneModal(false);
          props.showModal()
        }}
        showModal={() => setShowRetoneModal(true)}
      />
      <CommonModal
        heading="Other Considerations"
        body={residentialOtherConsiderationsModalBody}
        show={showOtherConsiderationsModal}
        onHide={() => {
          setShowOtherConsiderationsModal(false);
          props.showModal()
        }}
        showModal={() => setShowOtherConsiderationsModal(true)}
      />
    </>
  );
};

export default ResidentialModal
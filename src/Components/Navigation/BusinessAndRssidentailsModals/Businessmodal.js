import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { AiOutlineInfoCircle, } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { accessibilityModalBody, RETOMEModalBody, generatorsModalBody, competitorsModalBody, summaryModalBody } from './constants'
import CommonModal from '../CommonModal/CommonModal';

const BusinessModal = (props) => {
    const [showGoodVisibilityModal, setShowGoodVisibilityModal] = useState(false);
    const [showSignageModal, setShowSignageModal] = useState(false);
    const [showAccessibilityModal, setShowAccessibilityModal] = useState(false);
    const [showRetoneModal, setShowRetoneModal] = useState(false);
    const [showGeneratorModal, setShowGeneratorModal] = useState(false);
    const [showCompetitorModal, setShowCompetitorModal] = useState(false);
    const [showSummaryModal, setShowSummaryModal] = useState(false)


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
                        Business Users, you will want your location to have the following:
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="historyBoxContainers mBox-1">
                        <p
                            onClick={() => showOnlyChildModal(setShowGoodVisibilityModal)}>Good visibility
                            <AiOutlineInfoCircle className="info-icon-history" color="black" />
                        </p>
                    </div>

                    <div className="historyBoxContainers mBox-2">
                        <p
                            onClick={() => showOnlyChildModal(setShowSignageModal)}> Bright and Big Signage
                            <AiOutlineInfoCircle className="info-icon-history" color="black" />
                        </p>
                    </div>

                    <div className="historyBoxContainers mBox-3">
                        <p
                            onClick={() => showOnlyChildModal(setShowAccessibilityModal)}>Easy Accessibility
                            <AiOutlineInfoCircle className="info-icon-history" color="black" />
                        </p>
                    </div>

                    <div className="historyBoxContainers mBox-4">
                        <p
                            onClick={() => showOnlyChildModal(setShowRetoneModal)}> Strong Demographics
                            <AiOutlineInfoCircle className="info-icon-history" color="black" />
                        </p>
                    </div>

                    <div className="historyBoxContainers mBox-5">
                        <p
                            onClick={() => showOnlyChildModal(setShowGeneratorModal)}> Study Generators
                            <AiOutlineInfoCircle className="info-icon-history" color="black" />
                        </p>
                    </div>

                    <div className="historyBoxContainers mBox-6">
                        <p
                            onClick={() => showOnlyChildModal(setShowCompetitorModal)}> Evaluate Competitors
                            <AiOutlineInfoCircle className="info-icon-history" color="black" />
                        </p>
                    </div>

                    <div className="historyBoxContainers mBox-7"> Summary
                        <p
                            onClick={() => showOnlyChildModal(setShowSummaryModal)}>
                            <AiOutlineInfoCircle className="info-icon-history" color="black" />
                        </p>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

            <CommonModal
                heading="Good visibility"
                body="Your location should be easy to see and effortless for customers to find. "
                show={showGoodVisibilityModal}
                onHide={() => {
                    setShowGoodVisibilityModal(false);
                    props.showModal()
                }}
                showModal={() => setShowGoodVisibilityModal(true)}
            />
            <CommonModal
                heading="Bright and Big Signage"
                body="A prominent sign will show customers you are here and ready to do business. "
                show={showSignageModal}
                onHide={() => {
                    setShowSignageModal(false);
                    props.showModal()
                }}
                showModal={() => setShowSignageModal(true)}
            />
            <CommonModal
                heading="Easy Accessibility"
                body={accessibilityModalBody}
                show={showAccessibilityModal}
                onHide={() => {
                    setShowAccessibilityModal(false);
                    props.showModal()
                }}
                showModal={() => setShowAccessibilityModal(true)}
            />
            <CommonModal
                heading="Strong Demographics in the RETONE"
                body={RETOMEModalBody}
                show={showRetoneModal}
                onHide={() => {
                    setShowRetoneModal(false);
                    props.showModal()
                }}
                showModal={() => setShowRetoneModal(true)}
            />
            <CommonModal
                heading="Generators"
                body={generatorsModalBody}
                show={showGeneratorModal}
                onHide={() => {
                    setShowGeneratorModal(false);
                    props.showModal()
                }}
                showModal={() => setShowGeneratorModal(true)}
            />
            <CommonModal
                heading="Competitors"
                body={competitorsModalBody}
                show={showCompetitorModal}
                onHide={() => {
                    setShowCompetitorModal(false);
                    props.showModal()
                }}
                showModal={() => setShowCompetitorModal(true)}
            />
            <CommonModal
                heading="Summary"
                body={summaryModalBody}
                show={showSummaryModal}
                onHide={() => {
                    setShowSummaryModal(false);
                    props.showModal()
                }}
                showModal={() => setShowSummaryModal(true)}
            />
        </>
    );
};

export default BusinessModal
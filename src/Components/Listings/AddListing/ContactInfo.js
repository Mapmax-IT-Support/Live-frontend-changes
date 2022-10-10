import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import * as selectors from "../../../Reducers/selectors";
import Button from "react-bootstrap/Button";
import PhotoUploader from "./PhotoUploader";
import PhotoPreviews from "./PhotoPreviews";

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      photoError: "",
    };
  }

  componentDidUpdate(prevProps) {
    const { updateInfo, isUpdate } = this.props;
    if (
      prevProps.isUpdate !== isUpdate &&
      JSON.stringify(updateInfo) !== JSON.stringify(this.state)
    ) {
      this.setState({ ...updateInfo });
    }
  }

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
    this.props.addFormInfo(this.state, "contactInfo");
    this.props.setFormRef(this.form)
  };

  handleSetPhotos = (photos) => {
    this.props.handleSetPhotos("contact_photos", photos);
  };

  removePhoto = (index) => {
    this.props.handleRemovePhoto("contact_photos", index);
  };

  render() {
    return (
      <div className="formPage">
        <h3>3. Owner/Broker Contact Info</h3>
        <form style={{ padding: "16px" }} ref={this.form}>
          <strong>
            What is your relationship to this property? <span>*</span>
          </strong>
          <div className="inputGroup">
            <label>
              I am the broker
              <input
                type="checkbox"
                name="relationship"
                checked={this.state.relationship == "broker"}
                value={"broker"}
                onChange={this.handleChange}
              />
            </label>
            <label>
              I am the landlord
              <input
                type="checkbox"
                name="relationship"
                checked={this.state.relationship == "landlord"}
                value={"landlord"}
                onChange={this.handleChange}
              />
            </label>
            <label>
              other
              <input
                type="checkbox"
                name="relationship"
                checked={this.state.relationship == "other"}
                value={"other"}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="inputText">
            <strong className="inputGroup">Enter Company or Position</strong>
            <input
              type="text"
              name="companyOrPosition"
              value={this.state.companyOrPosition}
              onChange={this.handleChange}
              placeholder="Enter Company or Position"
              style={{ width: "230px" }}
            />
          </div>
          <div className="inputText">
            <strong className="inputGroup">Enter your Email</strong>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your Email"
            />
          </div>
          <div className="inputText">
            <strong className="inputGroup">Enter your Phone Number</strong>

            <input
              type="text"
              name="number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder="Enter your Phone Number"
              style={{ width: "230px" }}
            />
          </div>
          <div className="inputText">
            <strong className="inputGroup">Address Line1</strong>
            <input
              type="text"
              name="Address Line1"
              value={this.state.addressLine1}
              onChange={this.handleChange}
              placeholder="Enter your Address"
            />
          </div>
          <div className="inputText">
            <strong className="inputGroup">Address Line 2</strong>
            <input
              type="text"
              name="addressLine2"
              value={this.state.addressLine2}
              onChange={this.handleChange}
              placeholder="Enter your Address"
            />
          </div>
          <div className="inputText">
            <strong className="inputGroup">State/Province</strong>
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
              placeholder="Enter your State"
            />
          </div>
          <div>
            <strong className="inputGroup">Country</strong>
            <select>
              <option>AK</option>
              <option>MA</option>
              <option>NC</option>
              <option>NJ</option>
              <option>NY</option>
              <option>WO</option>
            </select>
          </div>
          <div className="inputText">
            <strong className="inputGroup">Zip Code</strong>
            <input
              type="text"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
              placeholder="Enter your ZipCode"
            />
          </div>
          {/* 
          <strong>Additional info</strong>
          <div className="inputGroup">
            <textarea
              className="textArea"
              type="text"
              multiline
              name="ownershipDetails"
              placeholder="Enter any additional contact information that is relevant to this listing"
              value={this.state.ownershipDetails}
              onChange={this.handleChange}
            />
          </div> */}

          <strong>Upload a photo of yourself</strong>
          <span>{this.state.photoError}</span>
          <PhotoUploader
            setPhotos={this.handleSetPhotos}
            singleImage={true}
            photos={this.props.photos}
          />

          <strong>
            User Feedback (This will not be shown on your listing)
          </strong>
          <div className="inputGroup">
            <textarea
              className="textArea"
              type="text"
              multiline
              name="userFeedback"
              placeholder="Enter any feedback you might have so that we can deliver you the best experience possible"
              value={this.state.ownershipDetails}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <Button
          variant="primary"
          onClick={() => this.props.handleBack(2)}
          className="nextButton"
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={this.props.handleNext}
          disabled={this.state.relationship === undefined}
          className="nextButton"
        >
          Next
        </Button>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  selectors.addressSelector,
  selectors.userSelector,
  (address, user) => ({
    address,
    user,
  })
);

export default connect(mapStateToProps)(AddListing);

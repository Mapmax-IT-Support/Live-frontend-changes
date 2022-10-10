import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import * as selectors from "../../../Reducers/selectors";
import Button from "react-bootstrap/Button";
import CurrencyInput from 'react-currency-input-field'

class AddListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyPrice: "",
      forSale: '',
      forLease: '',
      askingPrice: '',
      leasePricePerSquareFoot: '',
      saleAnnually: '',
      salePerSqFoot: '',
      leaseAnnually: '', leasePerSqFoot: ''
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
    this.props.addFormInfo(this.state, "pricingInfo");
  };
  disableHandler = () => {
    const { forSale, forLease, askingPrice, leasePricePerSquareFoot ,saleAnnually,salePerSqFoot,leaseAnnually,leasePerSqFoot} =
      this.state;
    if (forSale === "" || forLease === "") return true;
    if(this.props.isResidential==='yes'){
    if (forSale === "yes" && askingPrice!=='') {
      if (forLease === "no") return false;
      
      if (forLease === "yes" && leasePricePerSquareFoot!=="") return false;
    }
    if (forSale === "no") {
      if (forLease === "no") return false;
      if (forLease === "yes" && leasePricePerSquareFoot!=="") return false;
    }}
    else{
      if (forSale === "yes" && ((saleAnnually!==""&&saleAnnually!==undefined)|(salePerSqFoot!==''&&salePerSqFoot!==undefined))) {
        if (forLease === "no") return false;
        if (forLease === "yes" && ((leaseAnnually!==''&&leaseAnnually!==undefined)||(leasePerSqFoot!=='')&&leasePerSqFoot!==undefined)) return false;
        return true
      }
      if (forSale === "no") {
        if (forLease === "no") return false;
        if (forLease === "yes" && ((leaseAnnually!==''&&leaseAnnually!==undefined)||(leasePerSqFoot!==''&&leasePerSqFoot!==undefined))) return false;
       
    }
    return true
  
  }

    return true;
  };
   validateValue = (value,field)=>{
    
    this.setState({[field]:value})
  };

  render() {
    const {className,errorMessage}=this.state
    return (
      <div className="formPage">
        <h3>2. Pricing Info</h3>
        <form>
          <div>
            <strong className="inputGroup">
              For Sale, Asking price?{" "}
              <span style={{ color: "red" }}> * required</span>
            </strong>

            <div>
              <label>
                Yes
                <input
                  type="checkbox"
                  checked={this.state.forSale == "yes"}
                  name="forSale"
                  value={"yes"}
                  onChange={this.handleChange}
                />
               
                 <div className="invalid-feedback">{errorMessage}</div>
              </label>
              <label>
                No
                <input
                  type="checkbox"
                  checked={this.state.forSale == "no"}
                  name="forSale"
                  value={"no"}
                  onChange={this.handleChange}
                  className="dollar"
                />
              </label>
              <br />
              {this.state.forSale === "yes" && (
                <>
                  { this.props.isResidential==='yes'?
                  <>
                 <label htmlFor="askingPrice">Please enter a value:</label>
                  <CurrencyInput
                  id="askingPrice"
                  placeholder="$1,234,567"
                  allowDecimals={true}
                  onValueChange={(e)=>this.validateValue(e,'askingPrice')}
                  prefix={'$'}
                  step={10}
                  value={this.state.askingPrice}
                /></>:<>
                 <label htmlFor="saleAnnually">Annualy:</label>

                <CurrencyInput
                  id="saleAnnually"
                  placeholder="$1,234,567"
                  allowDecimals={true}
                  onValueChange={(e)=>this.validateValue(e,'saleAnnually')}
                  prefix={'$'}
                  step={10}
                  value={this.state.saleAnnually}
                />
                 <label htmlFor="salePerSqFoot" style={{marginLeft:'20px'}}>Per Sq Foot:</label>

                <CurrencyInput
                  id="salePerSqFoot"
                  placeholder="$1,234,567"
                  allowDecimals={true}
                  onValueChange={(e)=>this.validateValue(e,'salePerSqFoot')}
                  prefix={'$'}
                  step={10}
                  value={this.state.salePerSqFoot}
                />
                </>}
                </>
              )}
            </div>
            {/* <input
                  type="number"
                  name="askingPrice"
                  value={this.state.askingPrice}
                  onChange={this.handleChange}
                  placeholder="Enter Price"
                /> */}
          </div>
          <div>
            <strong className="inputGroup">
              For Lease, Asking price?{" "}
              <span style={{ color: "red" }}> * required</span>
            </strong>

            <div>
              <label>
                Yes
                <input
                  type="checkbox"
                  checked={this.state.forLease == "yes"}
                  name="forLease"
                  value={"yes"}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                No
                <input
                  type="checkbox"
                  checked={this.state.forLease == "no"}
                  name="forLease"
                  value={"no"}
                  onChange={this.handleChange}
                />
              </label>
              <br />
             
              {this.state.forLease === "yes" && (
                <>
                { this.props.isResidential==='yes'?
                <>
                 <label htmlFor="leasePricePerSquareFoot">Please enter a value:</label>
                <CurrencyInput
                  id="leasePricePerSquareFoot"
                  placeholder="$1,234,567"
                  allowDecimals={true}
                  onValueChange={(e)=>this.validateValue(e,'leasePricePerSquareFoot')}
                  prefix={'$'}
                  step={10}
                  value={this.state.leasePricePerSquareFoot}
                /></>:<>
                 <label htmlFor="leaseAnnually">Annually:</label>

                <CurrencyInput
                  id="leaseAnnually"
                  placeholder="$1,234,567"
                  allowDecimals={true}
                  onValueChange={(e)=>this.validateValue(e,'leaseAnnually')}
                  prefix={'$'}
                  step={10}
                  value={this.state.leaseAnnually}
                />
                 <label htmlFor="leasePerSqFoot" style={{marginLeft:'20px',paddingRight:'none'}}>Per Sq Foot:</label>

                <CurrencyInput
                  id="leasePerSqFoot"
                  placeholder="$1,234,567"
                  allowDecimals={true}
                  onValueChange={(e)=>this.validateValue(e,'leasePerSqFoot')}
                  prefix={'$'}
                  step={10}
                  value={this.state.leasePerSqFoot}
                />
                </>}
                </>
                
                // <input
                //   type="number"
                //   name="leasePricePerSquareFoot"
                //   value={this.state.leasePricePerSquareFoot}
                //   onChange={this.handleChange}
                //   placeholder="Enter Lease Price"
                // />
              )}
            </div>
          </div>

          <strong>
            If for lease, duration of the initial lease term and available
            renewal options, if any?
          </strong>
          <div className="inputGroup">
            <textarea
              maxLength="240"
              className="textArea"
              type="text"
              multiline
              name="leaseTermDetails"
              placeholder=""
              value={this.state.leaseTermDetails}
              onChange={this.handleChange}
            />
          </div>

          <strong>Common area maintenance costs, per square foot?</strong>
          <div className="inputGroup">
            <textarea
              maxLength="240"
              className="textArea"
              type="text"
              multiline
              name="maintainenceCostPerSquareFoot"
              placeholder=""
              value={this.state.maintainenceCostPerSquareFoot}
              onChange={this.handleChange}
            />
          </div>

          <strong>Property insurance costs per square foot, if lease?</strong>
          <div className="inputGroup">
            <textarea
              maxLength="240"
              className="textArea"
              type="text"
              multiline
              name="insuranceCostPerSquareFoot"
              placeholder=""
              value={this.state.insuranceCostPerSquareFoot}
              onChange={this.handleChange}
            />
          </div>

          <strong>Is this an assignment?</strong>
          <div className="inputGroup">
            <label>
              yes
              <input
                type="checkbox"
                checked={this.state.isAssignment == "yes"}
                name="isAssignment"
                value={"yes"}
                onChange={this.handleChange}
              />
            </label>
            <label>
              no
              <input
                type="checkbox"
                checked={this.state.isAssignment == "no"}
                name="isAssignment"
                value={"no"}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <strong>Is this a sublet?</strong>
          <div className="inputGroup">
            <label>
              yes
              <input
                type="checkbox"
                checked={this.state.isSublet == "yes"}
                name="isSublet"
                value={"yes"}
                onChange={this.handleChange}
              />
            </label>
            <label>
              no
              <input
                type="checkbox"
                checked={this.state.isSublet == "no"}
                name="isSublet"
                value={"no"}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <strong>Positive Site Considerations</strong>
          <div className="inputGroup">
            <textarea
              maxLength="500"
              className="textArea"
              type="text"
              multiline
              name="positiveConsiderations"
              placeholder=""
              value={this.state.insuranceCostPerSquareFoot}
              onChange={this.handleChange}
            />
          </div>
          <p style={{ fontSize: "12px" }}>500 characters max</p>

          <strong>Negative Site Considerations</strong>
          <div className="inputGroup">
            <textarea
              maxLength="500"
              className="textArea"
              type="text"
              multiline
              name="negativeConsiderations"
              placeholder=""
              value={this.state.insuranceCostPerSquareFoot}
              onChange={this.handleChange}
            />
          </div>
          <p style={{ fontSize: "12px" }}>500 characters max</p>

          <strong>Special Site Considerations</strong>
          <div className="inputGroup">
            <textarea
              maxLength="500"
              className="textArea"
              type="text"
              multiline
              name="specialConsiderations"
              placeholder=""
              value={this.state.insuranceCostPerSquareFoot}
              onChange={this.handleChange}
            />
          </div>
          <p style={{ fontSize: "12px" }}>500 characters max</p>
        </form>
        <Button
          variant="primary"
          onClick={() => this.props.handleBack(1)}
          className="nextButton"
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={this.props.handleNext}
          className="nextButton"
          disabled={this.disableHandler()}
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

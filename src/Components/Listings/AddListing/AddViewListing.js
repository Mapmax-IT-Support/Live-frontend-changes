import React,{useRef} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { createSelector } from "reselect";
import Button from "react-bootstrap/Button";
import SiteListing from "../../SiteListing";
import RecentListings from "../ListingPreviews/RecentListings";
import ListingView from "../ListingView";
import "../../../css/addListing/addviewlisting.scss";
import ResidentialBusinessUsers from "../ListingPreviews/ResidentialBusinessUsers";
import NavigationBar from "../../Navigation/NavigationBar";
import emailjs from 'emailjs-com'
// import NYCImage from "../../../images/backgrounds/NYC-Image.png)"

export default function AddViewListing() {
  const Iref=useRef();
  const sendEmail=e=>{
    e.preventDefault();
    debugger;
    emailjs.sendForm('service_mflp348', 'template_caywzsk',Iref.current,'6h8pmrJeSyCNFsoQ0')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    // emailjs.sendForm({
    //   "service_mflp348",
    //   "template_caywzsk",
    //   "6h8pmrJeSyCNFsoQ0",
    //   "test data"

    // }).then(res=>{
      
    // })


  }
  return (

    <div >
      < NavigationBar />
      <div className="App-header">
      <div style={{marginBottom:'10px'}}>
        <span  className="info-icon" style={{width:'auto',height:'auto',padding:'5px 8px'}}>
         <Link to="/addlisting" style={{color:'black'}}> Site Listing</Link>
        </span>
        </div>
        <div>
        <span className="info-icon" style={{width:'auto',height:'auto',padding:'5px 8px'}}>
         <Link to="/listings/browse" style={{color:'black'}}> Recent Listing</Link>

        </span>
      </div>
      </div>

      
    </div>
  );
}
 // <div
    //   src="https://kit.fontawesome.com/ade0b34805.js"
    //   crossorigin="anonymous"
    //   class="multi-button"
    // >
    //   <button class="button" id="newListings">
    //     <span>
    //       {/* New Listing */}
    //       <SiteListing />
    //     </span>
    //   </button>
    //   <button class="button" id="recentListings">
    //     <span>
    //       <RecentListings />{" "}
    //     </span>
    //   </button>
    //   <button class="button" id="allListings">
    //     <span> All Listings </span>
    //   </button>
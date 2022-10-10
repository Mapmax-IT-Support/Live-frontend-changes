import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import Button from "react-bootstrap/Button";
import SiteListing from "../../SiteListing";
import RecentListings from "../ListingPreviews/RecentListings";
import ListingView from "../ListingView";
import "../../../css/addListing/addviewlisting.scss";

export default function ResidentialBusinessUsers() {
  return (
    // <div>
    //   <div className="newListing">
    //     <SiteListing />
    //   </div>
    //   <div>
    //     <RecentListings />
    //   </div>
    //   <div className="allListings">All Listings</div>
    // </div>

    <div
      src="https://kit.fontawesome.com/ade0b34805.js"
      crossorigin="anonymous"
      class="multi-button"
    >
      <button class="button" id="newListings" onClick={SiteListing}>
        <span>
          New Listing
          {/* <SiteListing /> */}
        </span>
      </button>
      <button class="button" id="recentListings">
        <span>
          <RecentListings />
        </span>
      </button>
      <button class="button" id="allListings">
        <span> All Listings </span>
      </button>
    </div>
  );
}

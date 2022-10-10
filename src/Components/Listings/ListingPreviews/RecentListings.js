import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import * as selectors from "../../../Reducers/selectors";
import "../../../css/listingView.scss";
import { Link, withRouter } from "react-router-dom";
import { getRecents } from "../../../Requests/listings-requests";
import MultiSlideshow from "./MultipleSlideShow";
import { useMediaQuery } from "react-responsive";

const S3_BASE = "https://mapmax-backend.s3.amazonaws.com/";
const darkBg = "rgb(26,28,41)";
const lightBg = "rgb(31,33,48)";
const textPrimary = "whitesmoke";

function RecentListings() {
  const [listings, setListings] = useState([]);
  const isMobile = useMediaQuery({
    query: "(max-width:551px)",
  });
  const setSize = isMobile ? 1 : 3;

  useEffect(() => {
    const init = async () => {
      let data = await getRecents();
      let triplets = [[]];
      let tripletIndex = 0;

      if (data === undefined) return;

      //set at 9 most recent
      let i = 0;
      while (i < 9 && i < data.length) {
        if (triplets[tripletIndex].length === setSize) {
          tripletIndex += 1;
          triplets.push([]);
        }

        triplets[tripletIndex].push(data[i]);
        i += 1;
      }

      setListings(triplets);
    };

    init();
  }, []);

  return (
    <div className="recentListings">
      {/* style={{  width: '100%', height: '80%',  display: 'flex', flexDirection: 'column', alignItems: 'center'}} */}

      <Link to="listings/browse">
        {" "}
        <button
          variant="none"
          style={{ color: "black", background: "none", padding: 0, border: 0 }}
        >
          View Listings
        </button>
      </Link>
    </div>
  );
}

const mapStateToProps = createSelector(
  selectors.addressSelector,
  selectors.userSelector,
  (address, user) => ({
    address,
    user,
  })
);

const capitalizeFirst = (value) => {
  return value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
};

const formatKeys = (value) => {
  let formatted = "";
  for (let i = 0; i < value.length; i++) {
    let char = value.substring(i, i + 1);
    if (i == 0) {
      formatted += char.toUpperCase();
      continue;
    }

    if (char == char.toUpperCase()) {
      formatted += " " + char;
      continue;
    }

    formatted += char;
  }
  return formatted;
};

export default withRouter(connect(mapStateToProps)(RecentListings));

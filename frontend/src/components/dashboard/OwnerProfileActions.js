import React from "react";
import { Link } from "react-router-dom";
import {
  FaHelicopter,
  FaTree,
  FaHome,
  FaUserCircle,
  FaListUl
} from "react-icons/fa";

const OwnerProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/owner-homes" className="btn btn-light">
        <FaListUl></FaListUl> Your Listings
      </Link>
      <Link to="/add-homes" className="btn btn-light">
        <FaHome></FaHome> Add Home
      </Link>
      {/* <Link to="/add-helicopters" className="btn btn-light">
        <FaHelicopter></FaHelicopter> Add Helicopter
      </Link>
      <Link to="/add-farms" className="btn btn-light">
        <FaTree></FaTree> Add Farm
      </Link> */}
    </div>
  );
};

export default OwnerProfileActions;

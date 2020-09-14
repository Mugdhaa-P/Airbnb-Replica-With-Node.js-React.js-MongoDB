import React from "react";
import { Link } from "react-router-dom";
import {
  FaHelicopter,
  FaTree,
  FaHome,
  FaUserCircle,
  FaShoppingCart
} from "react-icons/fa";

const ProfileActions = () => {
  return (
    <div>
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="text-info mr-1" /> <FaUserCircle></FaUserCircle> Edit
        Profile
      </Link>

      <Link to="/homes" className="btn btn-light">
        <i className="text-info mr-1" />
        <FaHome></FaHome> Book a New Home
      </Link>
      {/* <Link to="/helicopters" className="btn btn-light">
        <i className=" text-info mr-1" />
        <FaHelicopter></FaHelicopter> Book Helicopter Ride
      </Link>
      <Link to="/farms" className="btn btn-light">
        <i className="text-info mr-1" />
        <FaTree></FaTree> Book Farm Visit
      </Link> */}
      <Link to="/booked-homes" className="btn btn-light">
        <i className="text-info mr-1" /> <FaShoppingCart></FaShoppingCart> Your
        Bookings
      </Link>
    </div>
    
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
};

export default ProfileActions;

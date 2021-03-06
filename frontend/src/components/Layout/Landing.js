import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Airbnb 0.1</h1>
                <p className="lead">Explore unique destinations all over the world!</p>
                <hr />
                <div>
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Get Started
                  </Link>
                </div>
                <br />
                <Link to="/ownerlogin" className="btn btn-lg btn-light">
                  Owner Login
                </Link>
                {" . "}
                <Link to="/login" className="btn btn-lg btn-light">
                  Traveller Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);

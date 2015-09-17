"use strict";

var React = require('react');


var EmployeeProfile = React.createClass({
  propTypes: {
    employee: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="profile">
        <div className="avatar-column">
          <img className="avatar-profile" src={this.props.employee.avatar} />
        </div>
        <div className="bio-column">
          <h1>{this.props.employee.first_name} {this.props.employee.last_name}<span className="edit-profile-button"><a href="#">Edit Profile</a></span></h1>
          <p>{this.props.employee.title}</p>
          <p>{"Employed since " + this.props.employee.start_date}</p>
          <p>{this.props.employee.location}</p>
          <p className="bio">{this.props.employee.bio}</p>
        </div>
        <div className="contact-column">
          <p><a href={"mailto:" + this.props.employee.email}>Email</a></p>
          <hr />
          <p className="mobile-title">Mobile Phone:</p>
          <p className="mobile-number"><a href={"tel:" + this.props.employee.phone}>{this.props.employee.phone}</a></p>
        </div>
      </div>
    );
  }
});

module.exports = EmployeeProfile;

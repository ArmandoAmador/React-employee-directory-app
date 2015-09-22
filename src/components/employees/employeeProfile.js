import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import formatDate from '../common/formatDate';

var EmployeeProfile = React.createClass({
  propTypes: {
    employeeItem: React.PropTypes.object.isRequired
  },

  render: function() {

    var startDate = formatDate(this.props.employeeItem.start_date);
    return (
      <div className="profile">
        <div className="avatar-column">
          <img className="avatar-profile" src={this.props.employeeItem.avatar} />
        </div>
        <div className="bio-column">
          <h1>{this.props.employeeItem.first_name} {this.props.employeeItem.last_name}
            <span className="edit-profile-button">
              <Link to={`/profile/${this.props.employeeItem.id}/edit`}> Edit Profile</Link>
            </span>
          </h1>
          <p>{this.props.employeeItem.title}</p>
          <p>{"Employed since " + startDate}</p>
          <p>{this.props.employeeItem.location}</p>
          <p className="bio">{this.props.employeeItem.bio}</p>
        </div>
        <div className="contact-column">
          <p><a href={"mailto:" + this.props.employeeItem.email}>Email</a></p>
          <hr />
          <p className="mobile-title">Mobile Phone:</p>
          <p className="mobile-number"><a href={"tel:" + this.props.employeeItem.phone}>{this.props.employeeItem.phone}</a></p>
        </div>
      </div>
    );
  }
});

export default EmployeeProfile;

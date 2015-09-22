import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import formatDate from '../common/formatDate';

var EmployeeProfile = React.createClass({
  propTypes: {
    employee: React.PropTypes.object.isRequired
  },

  render: function() {
    var startDate = formatDate(this.props.employee.start_date);
    return (
      <div className="profile">
        <div className="avatar-column">
          <img className="avatar-profile" src={this.props.employee.avatar} />
        </div>
        <div className="bio-column">
          <h1>{this.props.employee.first_name} {this.props.employee.last_name}
            <span className="edit-profile-button">
              <Link to="editprofile" params={{id: this.props.employee.id}}>Edit Profile</Link>
            </span>
          </h1>
          <p>{this.props.employee.title}</p>
          <p>{"Employed since " + startDate}</p>
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

export default EmployeeProfile;

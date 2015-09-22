import React from 'react';
import Input from '../common/input';
import TextArea from '../common/textArea';

var EmployeeForm = React.createClass({
  propTypes: {
    employee: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function() {
    return (
      <div className="editprofile">
        <form>
          <div className="form-section">
            <div className="left-section">
              <div className="avatar-section">
                <p>
                  <img className="avatar-profile" src={this.props.employee.avatar} />
                </p>

                <Input
                  name="avatar"
                  label="Avatar Url"
                  value={this.props.employee.avatar}
                  onChange={this.props.onChange}
                  error={this.props.errors.avatar}
                />
              </div>
            </div>
            <div className="right-section">
              <div className="bio-section">
                <Input
                  name="first_name"
                  label="First Name"
                  value={this.props.employee.first_name}
                  onChange={this.props.onChange}
                  error={this.props.errors.first_name}
                />

                <Input
                  name="last_name"
                  label="Last Name"
                  value={this.props.employee.last_name}
                  onChange={this.props.onChange}
                  error={this.props.errors.last_name}
                />

                <Input
                  name="title"
                  label="Title"
                  value={this.props.employee.title}
                  onChange={this.props.onChange}
                  error={this.props.errors.title}
                />

                <Input
                  name="start_date"
                  label="Start Date"
                  value={this.props.employee.start_date}
                  onChange={this.props.onChange}
                  error={this.props.errors.start_date}
                />

                <Input
                  name="location"
                  label="Office"
                  value={this.props.employee.location}
                  onChange={this.props.onChange}
                  error={this.props.errors.location}
                />

                <TextArea
                  name="bio"
                  label="Bio"
                  value={this.props.employee.bio}
                  onChange={this.props.onChange}
                  error={this.props.errors.bio}
                />
              </div>

              <div className="contact-section">

                <Input
                  name="email"
                  label="Email"
                  value={this.props.employee.email}
                  onChange={this.props.onChange}
                  error={this.props.errors.email}
                />

                <Input
                  name="phone"
                  label="Mobile Phone"
                  value={this.props.employee.phone}
                  onChange={this.props.onChange}
                  error={this.props.errors.phone}
                />
              </div>
            </div>
          </div>

          <div className="u-cf">
          </div>

          <div className="button-section">
            <button className="cancel-btn" onClick={this.props.onCancel}>Cancel</button>
            <button className="save-btn" onClick={this.props.onSave}>Save</button>
          </div>
        </form>
      </div>
    );
  }
});

export default EmployeeForm;

import React from 'react';

class TextArea extends React.Component{
  render() {
    var wrapperClass = 'form-group';

    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <textarea
            name={this.props.name}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <div className="error">{this.props.error}</div>
        </div>
      </div>
    );
  }
};

TextArea.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
  error: React.PropTypes.string
}

export default TextArea;

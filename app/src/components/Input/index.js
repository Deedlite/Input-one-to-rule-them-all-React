import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChangeInput(value);
  }
  render() {
    const { value, name } = this.props;
    return (
      <div className="input">
        <input type="text" value={value} name={name} onChange={this.handleChange} />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Input;

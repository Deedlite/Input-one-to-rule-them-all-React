import React from 'react';
import PropTypes from 'prop-types';

class InputAll extends React.Component {
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChangeInputAll(value);
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

InputAll.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeInputAll: PropTypes.func.isRequired,
};

export default InputAll;

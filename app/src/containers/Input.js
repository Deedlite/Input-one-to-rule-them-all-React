/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Input from 'src/components/Input';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.name],
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInput: (value) => {
    dispatch({
      type: 'CHANGE_INPUT',
      name: ownProps.name,
      value,
    });
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(Input);

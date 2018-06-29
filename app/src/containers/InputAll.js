/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import InputAll from 'src/components/InputAll';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.name],
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputAll: (value) => {
    dispatch({
      type: 'CHANGE_ALL_INPUT',
      name: ownProps.name,
      value,
    });
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(InputAll);

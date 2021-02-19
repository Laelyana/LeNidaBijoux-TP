import { connect } from 'react-redux';
import UserData from 'src/components/UserData';
import { fetchUserData } from '../../actions/user';

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchUserData());
  },
});

const mapStateToProps = (state) => ({
  data: state.editUser.data,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserData);

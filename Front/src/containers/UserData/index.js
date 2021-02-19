import { connect } from 'react-redux';
import UserData from 'src/components/UserData';

const mapStateToProps = (state) => ({
  lastname: state.user.lastname,
  firstname: state.user.firstname,
  phoneNumber: state.user.phoneNumber,
  email: state.user.email,
});
export default connect(mapStateToProps, null)(UserData);

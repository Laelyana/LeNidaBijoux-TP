import { connect } from 'react-redux';
import UserData from 'src/components/UserData';
import { changeEditUserField, editUser, fetchUserData } from '../../actions/user';

const mapStateToProps = (state) => ({
  lastname: state.editUser.lastname,
  firstname: state.editUser.firstname,
  phoneNumber: state.editUser.phoneNumber,
  email: state.editUser.email,
});

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchUserData());
  },
  changeField: (fieldValue, fieldName) => {
    dispatch(changeEditUserField(fieldValue, fieldName));
  },
  handleEditUser: () => {
    dispatch(editUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserData);

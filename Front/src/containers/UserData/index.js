import { connect } from 'react-redux';
import UserData from 'src/components/UserData';
import { changeEditUserField, editUser } from '../../actions/user';

const mapStateToProps = (state) => ({
  lastname: state.editUser.lastname,
  firstname: state.editUser.firstname,
  phoneNumber: state.editUser.phoneNumber,
  email: state.editUser.email,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeEditUserField(fieldValue, fieldName));
  },
  handleCreateUser: () => {
    dispatch(editUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserData);

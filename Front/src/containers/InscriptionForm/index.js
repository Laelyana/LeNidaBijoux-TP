import { connect } from 'react-redux';
import InscriptionForm from 'src/components/LoginPage/InscriptionForm';
import { changeNewUserField, createUser } from '../../actions/user';

const mapStateToProps = (state) => ({
  lastname: state.createUser.lastname,
  firstname: state.createUser.firstname,
  phoneNumber: state.createUser.phoneNumber,
  email: state.createUser.email,
  password: state.createUser.password,
  confirmPassword: state.createUser.confirmPassword,
  emptyInput: state.createUser.emptyInput,
  badMail: state.createUser.badMail,
  badPhone: state.createUser.badPhone,
  badPassword: state.createUser.badPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeNewUserField(fieldValue, fieldName));
  },
  handleCreateUser: () => {
    dispatch(createUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InscriptionForm);

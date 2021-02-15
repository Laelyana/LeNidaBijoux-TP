import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginPage/LoginForm';
import { changeUserField } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeUserField(fieldValue, fieldName))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

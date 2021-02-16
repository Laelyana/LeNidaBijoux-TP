import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginPage/LoginForm';
import { changeUserField, logIn } from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeUserField(fieldValue, fieldName))
  },
  handleLogin: () => {
    dispatch(logIn());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

import { connect } from 'react-redux';
import Bandeau from 'src/components/Bandeau';
import { logOut } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  status: state.status.status,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Bandeau);

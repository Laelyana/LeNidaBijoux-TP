import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchStatus } from '../../actions/site';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  status: state.status.status,
  categories: state.categories.categories,
  products: state.products.products,
});
const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchStatus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

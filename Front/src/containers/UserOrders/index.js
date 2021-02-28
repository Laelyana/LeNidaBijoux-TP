import { connect } from 'react-redux';

import UserOrders from 'src/components/UserOrders';
import { fetchOrders } from '../../actions/orders';

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchOrders());
  },
});

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);

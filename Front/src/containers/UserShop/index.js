import { connect } from 'react-redux';

import UserShop from 'src/components/UserShop';

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  order: state.order.order,
});

export default connect(mapStateToProps, null)(UserShop);

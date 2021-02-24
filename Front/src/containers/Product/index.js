import { connect } from 'react-redux';

import Product from 'src/components/Product';
import { addToCart } from 'src/actions/shop';

const mapDispatchToProps = (dispatch) => ({
  manageAddCart: () => {
    dispatch(addToCart());
  },
});

export default connect(null, mapDispatchToProps)(Product);

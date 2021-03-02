import { connect } from 'react-redux';

import Product from 'src/components/Product';
import { addToCard } from 'src/actions/shop';

const mapDispatchToProps = (dispatch) => ({
  manageAddCart: () => {
    dispatch(addToCard());
  },
});

export default connect(null, mapDispatchToProps)(Product);

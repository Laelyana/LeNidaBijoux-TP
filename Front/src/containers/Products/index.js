import { connect } from 'react-redux';

import Products from 'src/components/Products';
import { fetchProducts } from '../../actions/products';


const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchProducts());
  },
});

export default connect(null, mapDispatchToProps)(Products);

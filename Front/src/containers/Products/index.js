import { connect } from 'react-redux';

import Products from 'src/components/Products';
import { fetchProducts } from '../../actions/products';

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchProducts());
  },
});

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

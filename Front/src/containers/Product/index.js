import { connect } from 'react-redux';

import Product from 'src/components/Product';
import { addToCard } from 'src/actions/shop';

const mapDispatchToProps = (dispatch) => ({
  manageAddCart: () => {
    dispatch(addToCard());
  },
});
const mapStateToProps = (state) => ({
  status: state.status.status,
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

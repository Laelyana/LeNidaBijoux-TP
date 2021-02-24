import { connect } from 'react-redux';

import FavoritesAdd from 'src/components/FavoritesAdd';
import { fetchFavoritesAdd } from '../../actions/favoritesAdd';

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchFavorites());
  },
});

const mapStateToProps = (state) => ({
  favoritesAdd: state.favoritesAdd.favoritesAdd,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesAdd);

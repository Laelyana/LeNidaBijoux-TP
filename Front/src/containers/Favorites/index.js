import { connect } from 'react-redux';

import Favorites from 'src/components/Favorites';
import { fetchFavorites } from '../../actions/favorites';

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchFavorites());
  },
});

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

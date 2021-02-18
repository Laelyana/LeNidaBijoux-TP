import { connect } from 'react-redux';

import Collections from 'src/components/Collections';
import { fetchCollections } from '../../actions/collections';

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchCollections());
  },
});

const mapStateToProps = (state) => ({
  collections: state.collections.collections,
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);

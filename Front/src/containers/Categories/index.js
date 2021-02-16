import { connect } from 'react-redux';

import Categories from 'src/components/Categories';
import { fetchCategories } from '../../actions/categories';


const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchCategories());
  },
});

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});


export default connect(mapStateToProps, mapDispatchToProps)(Categories);

import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

export default connect(mapStateToProps, null)(App);

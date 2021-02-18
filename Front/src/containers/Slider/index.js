import { connect } from 'react-redux';

import Slider from 'src/components/Slider';
import { fetchSlider } from '../../actions/slider';

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchSlider());
  },
});

const mapStateToProps = (state) => ({
  slider: state.slider.slider,
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

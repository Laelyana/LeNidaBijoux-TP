import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import { changeContactFormField, saveContactForm } from '../../actions/contactForm';

const mapStateToProps = (state) => ({
  lastname: state.contactForm.lastname,
  firstname: state.contactForm.firstname,
  message: state.contactForm.message,
  email: state.contactForm.email,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeContactFormField(fieldValue, fieldName));
  },
  handleContact: () => {
    dispatch(saveContactForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import '../Field/field.scss';

// == Composant
const Textarea = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div>
      <textarea
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="form__input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  value: '',
  type: 'text',
};

export default Textarea;

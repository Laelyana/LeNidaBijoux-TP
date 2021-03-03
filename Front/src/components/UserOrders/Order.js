import React from 'react';
import PropTypes from 'prop-types';
import newDate from 'src/utils/date';

const Order = ({ date }) => {
  const orderDate = newDate(date);


  return (
    <div className="userorder__list--item">
      <h5 className="userorder__list--item--name">Votre commande du {orderDate} </h5>
      <button type="button" className="userorder__list--item--button">Consulter</button>
    </div>
  );
};
Order.propTypes = {
  date: PropTypes.string.isRequired,
};
export default Order;

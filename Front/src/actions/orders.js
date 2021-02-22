export const FETCH_ORDERS = 'FETCH_ORDERS';
export const SAVE_ORDERS = 'SAVE_ORDERS';

export const fetchOrders = () => ({
  type: FETCH_ORDERS,
});

export const saveOrders = (orders) => ({
  type: SAVE_ORDERS,
  orders,
});

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const SAVE_ORDERS = 'SAVE_ORDERS';
export const CREATE_ORDER = 'CREATE_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const CLEAR_CART = 'CLEAR_CART';

export const fetchOrders = () => ({
  type: FETCH_ORDERS,
});

export const saveOrders = (orders) => ({
  type: SAVE_ORDERS,
  orders,
});
export const createOrder = (order) => ({
  type: CREATE_ORDER,
  order,
});
export const clearOrder = () => ({
  type: CLEAR_ORDER,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});

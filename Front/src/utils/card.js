export const existingCartItem = ({
  prevCartItems,
  nextCartItem,
}) => prevCartItems.find(
  (cartItem) => cartItem.id === nextCartItem.id,
);

export const handleAddToCart = ({
  prevCartItems,
  nextCartItem,
}) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map((cartItem) => (cartItem.id === nextCartItem.id
      ? {
        ...cartItem,
        quantity: cartItem.quantity + quantityIncrement,
      } : cartItem));
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};
export const handleRemoveCartItem = ({
  prevCartItems,
  cartItemToRemove,
}) => prevCartItems.filter((item) => item.id !== cartItemToRemove.id);

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce,
}) => {
  const existingCartItem = prevCartItems.find((cartItem) => cartItem.documentID === cartItemToReduce.documentID);

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.documentID !== existingCartItem.documentID,
    );
  }

  return prevCartItems.map((cartItem) => (cartItem.documentID === existingCartItem.documentID
    ? {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    } : cartItem));
};

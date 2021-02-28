function getProductsByCategory(products, categoryId) {
  const filteredProductList = products.filter((product) => product.categoryApi === categoryId);

  return filteredProductList;
}
export default getProductsByCategory;

export const getProductsByCollections = (products, collectionId) => {
  const filteredProductList = products.filter((product) => product.colectionApi === collectionId);

  return filteredProductList;
};

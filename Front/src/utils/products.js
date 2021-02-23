function getProductsByCategory(products, categoryId) {
  const filteredProductList = products.filter((product) => product.categoryApi === categoryId);

  return filteredProductList;
}
export default getProductsByCategory;

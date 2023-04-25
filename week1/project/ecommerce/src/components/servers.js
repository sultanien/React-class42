/** @format */

export function filterProducts(array, category) {
  const selectedProducts = array.filter(
    (item) => item.category === category
  );
  return selectedProducts;
}

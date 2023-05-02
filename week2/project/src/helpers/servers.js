/** @format */

export function filterProducts(array, category) {
  const selectedProducts = array.filter((item) => item.category === category);
  return selectedProducts;
}

export const fetchData = async (url, setData, setIsLoading, setHasError) => {
  setIsLoading(true);
  setHasError(false);
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
     setTimeout(() => {
       setData(data);
       setIsLoading(false);
     }, 300);
  } catch (error) {
    setHasError(true);
  }
};

/** @format */

export const fetchData = async (url, setData, setIsLoading, setHasError) => {
  setIsLoading(true);
  setHasError(false);
  try {
    const response = await fetch(url);
    const data = await response.json();
     setTimeout(() => {
       setData(data);
       setIsLoading(false);
     }, 300);
  } catch (error) {
    setHasError(true);
  }
};

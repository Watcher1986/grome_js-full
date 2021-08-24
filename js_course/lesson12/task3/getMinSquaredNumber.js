export default (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const absArr = array.map((el) => Math.abs(el));
  const minNum = Math.min(...absArr);
  return minNum * minNum;
};

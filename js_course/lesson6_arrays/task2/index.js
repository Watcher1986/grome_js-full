const numbers = [11, 22, 32, 17, 33, 77, 55];

function getArrBound(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

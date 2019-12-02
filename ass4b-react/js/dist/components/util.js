var isEmptyObject = function isEmptyObject(obj) {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

var toCash = function toCash(val) {
  return (+val).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

export { isEmptyObject, toCash };
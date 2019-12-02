const isEmptyObject = obj => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

const toCash = val =>
  (+val).toLocaleString("en-US", { style: "currency", currency: "USD" });

export { isEmptyObject, toCash };

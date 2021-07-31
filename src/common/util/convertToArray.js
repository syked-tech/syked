const convertToArray = (val) => {
  const keys = typeof val === 'object' ? val[0] : JSON.parse(val)[0];
  return Object.keys(keys).map((item, index) => keys[index]);
};

export default convertToArray;

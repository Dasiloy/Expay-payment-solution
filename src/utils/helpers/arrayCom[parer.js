function isEqualArray(parentList = [], comparerArray = [], key = '') {
  const matching = parentList.find((item) => {
    const results = [];
    const prop = item[key];
    prop.forEach((permit) => {
      results.push(comparerArray.includes(permit));
    });
    return results.every((item) => item === true) && prop.length >= comparerArray.length;
  });

  return matching;
}

export default isEqualArray;

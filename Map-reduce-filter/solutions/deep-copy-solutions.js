const deepCopy = (complexArray) => JSON.parse(JSON.stringify(complexArray));

export default Object.freeze(deepCopy);
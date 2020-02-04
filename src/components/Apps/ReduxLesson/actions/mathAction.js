export function doAdd(value) {
  return {
    type: "MATH_ADD",
    payload: value
  };
}

export function doSubstract(value) {
  return {
    type: "MATH_SUBTRACT",
    payload: value
  }
}
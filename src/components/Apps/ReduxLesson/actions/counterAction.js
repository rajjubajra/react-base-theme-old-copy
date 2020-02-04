export function increaseCounter(value) {
  console.log("counter Increment run", value);
  return {
    type: "INCREMENT",
    payload: value
  }
}
export function decreaseCounter(value) {
  console.log("counter decrement");
  return {
    type: "DECREMENT",
    payload: value
  }
}

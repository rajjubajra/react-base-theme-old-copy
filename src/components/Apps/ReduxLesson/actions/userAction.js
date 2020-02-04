export function setName(name) {
  console.log('action name', name);
  return {
    type: "USER_SET_NAME",
    payload: name
  }
}
export function setAge(age) {
  console.log("action age", age);
  return {
    type: "USER_SET_AGE",
    payload: age
  }
}
export function setPath(value) {
  console.log('action runing', value);
  return {
    type: 'PAGE_NAV',
    payload: value
  }
}
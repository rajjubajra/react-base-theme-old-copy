const initalRouter = {
  path: 'lanpasaa'
}

const routerReducer = (state = initalRouter, action) => {
  switch (action.type) {
    case "PAGE_NAV":
      state = {
        path: action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}

export default routerReducer;
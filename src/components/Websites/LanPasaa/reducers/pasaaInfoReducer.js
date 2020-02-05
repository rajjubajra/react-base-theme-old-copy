const initialInfo = {
  type: "PASAA_TITLE",
  name: "La Pasaa"
}

const pasaaInfoReducer = (state = initialInfo, action) => {
  switch (action.type) {
    case "PASAA_TITLE":
      state = { name: action.payload }
      break;

    default:
      return state;

  }
  return state;
}
export default pasaaInfoReducer;
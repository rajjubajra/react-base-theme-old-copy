//try and catch because user browser privacy mode may not allow  to access localstorage
//retrive from localstorage
export const loadState = () => {
  try {
    const initialState = localStorage.getItem('state');
    if (initialState === null) {
      localStorage.setItem('state', JSON.stringify([]));
      //return undefined;
    }
    return JSON.parse(initialState);
  } catch (err) {
    console.log("LoadState Error", err);
    return undefined;
  }
}

//save to localstorage
export const saveState = (state) => {
  try {
    const initialState = JSON.stringify(state);
    /** it is only works if the state is serializable */
    /** this is general recomendation on redux state should be serializable */
    localStorage.setItem('state', initialState);
  } catch (err) {
    //ignore for now later log them some where
    console.log("SaveState Error: ", err);
    return undefined;
  }
}


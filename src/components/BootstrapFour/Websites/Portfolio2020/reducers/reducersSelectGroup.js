import { actionTypes } from '../actions/actionType';

const initialState = {
  groupname: 'all'
}

export const reducerSelectGroup = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_PROJECT_GROUP_ITEM:
      {
        return { groupname: action.payload.toLowerCase() }
      }

    default:
      return state;

  }
}
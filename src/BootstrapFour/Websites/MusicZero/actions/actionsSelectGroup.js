import { actionTypes } from './actionType';

export const actionSelectGroup = (groupname) => (
  {
    type: actionTypes.SELECT_PROJECT_GROUP_ITEM,
    payload: groupname
  }
)
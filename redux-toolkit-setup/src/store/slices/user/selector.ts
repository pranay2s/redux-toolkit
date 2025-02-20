
import { createSelector } from 'reselect';
import { RootState } from '../..';


// Base selector to access users state
const selectUsersState = (state: RootState) => state.user;

// Selector to select userList
export const selectUserList = createSelector(
  [selectUsersState],
  (usersState) => usersState.users
);

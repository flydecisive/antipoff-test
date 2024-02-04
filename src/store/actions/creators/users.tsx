import { SET_ALL_USERS, SET_SINGLE_USER } from "../types/users";

export const setAllUsers = (allUsers: any) => ({
  type: SET_ALL_USERS,
  payload: { allUsers },
});

export const setSingleUser = (singleUser: any) => ({
  type: SET_SINGLE_USER,
  payload: { singleUser },
});

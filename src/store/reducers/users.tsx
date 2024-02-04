import { SET_ALL_USERS, SET_SINGLE_USER } from "../actions/types/users";

const initialUsers = {
  allUsers: [],
  singleUser: {},
};

function usersReducer(
  state = initialUsers,
  action: { type: string; payload?: any; meta?: object }
) {
  switch (action.type) {
    case SET_ALL_USERS: {
      const { allUsers } = action.payload;

      return { ...state, allUsers };
    }

    case SET_SINGLE_USER: {
      const { singleUser } = action.payload;

      return { ...state, singleUser };
    }

    default:
      return state;
  }
}

export default usersReducer;

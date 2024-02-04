import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";
import { appApi } from "../services/appApi";

const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export default store;

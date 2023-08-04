import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./errors";
import { logger } from "./middleware/logger";
import taskReducer from "./task";

const rootReducer = combineReducers({
  errors: errorReducer,
  tasks: taskReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(logger),
    devTools: process.env.MODE_ENV !== "production",
  });
}

export default createStore;

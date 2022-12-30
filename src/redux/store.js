import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "./contacts/reducers";

import { usersApi } from "./contacts/contacts-operation";
import logger from "redux-logger";

import { setupListeners } from "@reduxjs/toolkit/query";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
    .concat(logger)
    .concat(usersApi.middleware);





const store = configureStore({
  reducer: {
    users: todoReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export { store, persistor };
setupListeners(store.dispatch);

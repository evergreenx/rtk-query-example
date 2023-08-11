import { configureStore } from "@reduxjs/toolkit";
import { apiProductSlice } from "./features/api/apiProductSlice";

export default configureStore({
  reducer: {
    [apiProductSlice.reducerPath]: apiProductSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProductSlice.middleware),
});

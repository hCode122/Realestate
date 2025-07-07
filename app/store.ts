import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "@/lib/redux/api/mainApi";
import categoryReducer from "@/lib/redux/features/categorySlice"

export const makeStore = () => {
    return configureStore({
      reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        category: categoryReducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware)
    })
  }

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


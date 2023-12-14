import filtersReducer from "@/redux/features/filtersSlice"
import { combineReducers } from "@reduxjs/toolkit"

export const rootReducer = combineReducers({
  filters: filtersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

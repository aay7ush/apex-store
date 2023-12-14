import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchTerm: "",
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const { addSearchTerm } = filtersSlice.actions

export default filtersSlice.reducer

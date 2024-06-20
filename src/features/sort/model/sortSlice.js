import { createSlice } from '@reduxjs/toolkit'
import { fetchSortedProducts } from './sortThunk'

const initialState = {
  sortBy: 'price',
  loading: false,
  error: null,
  goods: [],
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSortedProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSortedProducts.fulfilled, (state, action) => {
        state.sortBy = action.meta.arg
        state.goods = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchSortedProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
  },
})

export default sortSlice.reducer

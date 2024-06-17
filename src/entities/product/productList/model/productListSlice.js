import { createSlice } from '@reduxjs/toolkit'
import { fetchProductList } from './productListThunk'

const initialState = {
  goods: [],
  loading: false,
  error: null,
}

export const productListSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.goods = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
  },
})

export default productListSlice.reducer

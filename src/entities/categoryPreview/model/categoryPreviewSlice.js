import { createSlice } from '@reduxjs/toolkit'
import { fetchCategoryPreview } from './categoryPreviewThunk'

const initialState = {
  goods: [],
  loading: false,
  error: null,
}

export const categoryPreviewSlice = createSlice({
  name: 'categoryPreview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryPreview.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategoryPreview.fulfilled, (state, action) => {
        state.goods = {
          ...state.goods,
          [action.payload.category]: action.payload.goods,
        }
        state.loading = false
        state.error = null
      })
      .addCase(fetchCategoryPreview.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
  },
})

export default categoryPreviewSlice.reducer

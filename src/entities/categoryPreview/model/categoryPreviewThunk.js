import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCategoryPreview } from '../../../shared/api/categoryPreview'

export const fetchCategoryPreview = createAsyncThunk(
  'goods/fetchCategoryPreview',
  async (category, thunkAPI) => {
    try {
      const response = await getCategoryPreview(category)
      return { goods: response.data, category }
    } catch (error) {
      const knownError = error

      return thunkAPI.rejectWithValue({
        messageError: knownError.message,
        status: knownError.response?.status,
      })
    }
  }
)

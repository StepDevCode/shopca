import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSortedProducts } from '../../../shared/api/sort'

export const fetchSortedProducts = createAsyncThunk(
  'goods/fetchSortedProducts',
  async (sortBy, thunkAPI) => {
    try {
      const response = await getSortedProducts(sortBy)
      return response.data
    } catch (error) {
      const knownError = error

      return thunkAPI.rejectWithValue({
        messageError: knownError.message,
        status: knownError.response?.status,
      })
    }
  }
)

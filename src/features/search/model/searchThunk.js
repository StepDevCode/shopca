import { createAsyncThunk } from '@reduxjs/toolkit'
import { getResultsSearch } from '../../../shared/api/search'

export const fetchSearch = createAsyncThunk(
  'goods/fetchSearch ',
  async ({ searchStr }, thunkAPI) => {
    try {
      const response = await getResultsSearch(searchStr)
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

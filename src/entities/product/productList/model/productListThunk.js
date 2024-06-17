import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProduct } from '../../../../shared/api/product'

export const fetchProductList = createAsyncThunk(
  'goods/fetchProductList',
  async (_, thunkAPI) => {
    try {
      const response = await getProduct()
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

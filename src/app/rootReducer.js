import { combineReducers } from '@reduxjs/toolkit'
import { searchReducer } from '../features/search'
import { productReducer } from '../entities/product/productList'
import { categoryPreviewReducer } from '../entities/categoryPreview'

export const rootReducer = combineReducers({
  search: searchReducer,
  goods: productReducer,
  categoryPreview: categoryPreviewReducer,
})

import { combineReducers } from '@reduxjs/toolkit'
import { searchReducer } from '../features/search'
import { productReducer } from '../entities/product/productList'
import { categoryPreviewReducer } from '../entities/categoryPreview'
import { sortReducer } from '../features/sort'

export const rootReducer = combineReducers({
  search: searchReducer,
  goods: productReducer,
  categoryPreview: categoryPreviewReducer,
  sort: sortReducer,
})

import { combineReducers } from '@reduxjs/toolkit'
import { searchReducer } from '../features/search'

export const rootReducer = combineReducers({
  search: searchReducer,
})

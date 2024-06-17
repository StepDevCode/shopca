import { createSelector } from '@reduxjs/toolkit'

const selectBase = createSelector(
  (state) => state,
  (state) => state.goods
)

export const selectProductList = createSelector(
  selectBase,
  (state) => state.goods
)

export const selectProductListLoading = createSelector(
  selectBase,
  (state) => state.loading
)

export const selectProductListError = createSelector(
  selectBase,
  (state) => state.error
)

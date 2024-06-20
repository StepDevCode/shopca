import { createSelector } from '@reduxjs/toolkit'

const selectBase = createSelector(
  (state) => state,
  (state) => state.sort
)

export const selectSort = createSelector(selectBase, (state) => state.goods)

export const selectSortLoading = createSelector(
  selectBase,
  (state) => state.loading
)

export const selectSortError = createSelector(
  selectBase,
  (state) => state.error
)

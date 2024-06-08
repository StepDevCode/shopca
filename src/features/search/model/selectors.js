import { createSelector } from '@reduxjs/toolkit'

const selectBase = createSelector(
  (state) => state,
  (state) => state.search
)

export const selectSearch = createSelector(selectBase, (state) =>
  state.goods.slice(0, 5)
)

export const selectSearchLoading = createSelector(
  selectBase,
  (state) => state.loading
)

export const selectSearchError = createSelector(
  selectBase,
  (state) => state.error
)

import { createSelector } from '@reduxjs/toolkit'

const selectBase = createSelector(
  (state) => state,
  (state) => state.categoryPreview
)

export const selectCategoryPreview = createSelector(
  selectBase,
  (state) => state.goods
)

export const selectCategoryPreviewLoading = createSelector(
  selectBase,
  (state) => state.loading
)

export const selectCategoryPreviewError = createSelector(
  selectBase,
  (state) => state.error
)

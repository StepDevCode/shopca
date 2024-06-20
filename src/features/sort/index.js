export { default as sortReducer } from './model/sortSlice'
export { fetchSortedProducts } from './model/sortThunk'
export {
  selectSort,
  selectSortLoading,
  selectSortError,
} from './model/selectors'
export { Sort } from './ui/sort'

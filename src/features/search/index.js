export { default as searchReducer } from './model/searchSlice'
export { fetchSearch } from './model/searchThunk'
export {
  selectSearch,
  selectSearchLoading,
  selectSearchError,
} from './model/selectors'
export { Search } from './ui/search/search'
export { DropdownSearchItem } from './ui/dropdownSearchItem/dropdownSearchItem'

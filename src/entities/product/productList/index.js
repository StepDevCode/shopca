export { default as productReducer } from './model/productListSlice'
export { fetchProductList } from './model/productListThunk'
export {
  selectProductList,
  selectProductListLoading,
  selectProductListError,
} from './model/selectors'

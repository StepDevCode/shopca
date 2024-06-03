import { apiInstance } from '../base'

const BASE_URL = 'goods'

export const getProduct = () => {
  return apiInstance.get(BASE_URL)
}

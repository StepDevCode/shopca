import { apiInstance } from '../base'

const BASE_URL = 'goods?sortBy='

export const getSortedProducts = (sortBy) => {
  return apiInstance.get(`${BASE_URL}${sortBy}`)
}

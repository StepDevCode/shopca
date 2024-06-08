import { apiInstance } from '../base'

const BASE_URL = 'goods?title=*'

export const getResultsSearch = (searchStr) => {
  return apiInstance.get(`${BASE_URL}${searchStr}`)
}

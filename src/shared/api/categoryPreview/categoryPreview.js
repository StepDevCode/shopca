import { apiInstance } from '../base'

const BASE_URL = 'goods?categoryPreview=*'

export const getCategoryPreview = (category) => {
  return apiInstance.get(`${BASE_URL}${category}`)
}

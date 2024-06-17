import { useEffect } from 'react'
import {
  selectCategoryPreview,
  fetchCategoryPreview,
  selectCategoryPreviewLoading,
  selectCategoryPreviewError,
} from '../../entities/categoryPreview'
import { ProductPreview } from '../../entities/product/productPreview/ui/productPreview'
import { useAppSelector, useAppDispatch } from '../../shared/lib/store'
import { CategoryPreview } from '../../widgets/categoryPreview/ui/categoryPreview'
import { Carousel } from '../../shared/ui/carousel'

import './home.scss'

export const Home = () => {
  const TITLE_OF_PRODUCT_CATEGORIES = ['Top Selling', 'New Arrivals']

  const goods = useAppSelector(selectCategoryPreview)
  const loading = useAppSelector(selectCategoryPreviewLoading)
  const error = useAppSelector(selectCategoryPreviewError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    TITLE_OF_PRODUCT_CATEGORIES.forEach((title) => {
      dispatch(fetchCategoryPreview(title))
    })
  }, [])

  const renderProducts = (items, categoryId) => {
    return items?.map((item) => (
      <ProductPreview
        key={categoryId}
        images={item.images}
        title={item.title}
        rating={item.rating}
        price={item.price}
      />
    ))
  }

  const renderCategories = (categories) => {
    return Object.keys(categories)?.map((titleCategory) => (
      <CategoryPreview key={titleCategory} title={titleCategory}>
        <Carousel>
          {renderProducts(categories[titleCategory], titleCategory)}
        </Carousel>
      </CategoryPreview>
    ))
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return <div>{renderCategories(goods)}</div>
}

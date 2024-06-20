import { Sort } from '../../features/sort'
import { ProductPreview } from '../../entities/product/productPreview'
import { selectSort } from '../../features/sort'
import { useAppSelector } from '../../shared/lib/store'

import './catalog.scss'

export const Catalog = () => {
  const sortedProducts = useAppSelector(selectSort)

  return (
    <div className="catalog">
      <div className="catalog__filters">Filters</div>
      <div className="catalog__inner">
        <div className="catalog__top">
          <h4 className="catalog__title">Title</h4>
          <Sort />
        </div>
        <div className="catalog__items">
          {sortedProducts?.map((item) => (
            <ProductPreview key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

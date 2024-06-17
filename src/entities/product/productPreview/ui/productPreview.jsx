import { useAppSelector } from '../../../../shared/lib/store'
import { renderStars } from '../../../../shared/ui/rating/rating'
import { selectProductList } from '../../productList'

import s from './ProductPreview.module.scss'

export const ProductPreview = (props) => {
  const { id, images, price, title, rating, discount } = props
  const goods = useAppSelector(selectProductList)

  return (
    <div className={s.product}>
      <img className={s.img} src={images.main} alt={title} />
      <h4 className={s.title}>{title}</h4>
      <div className={s.rating}>
        {renderStars(rating)}
        {rating} <span className={s.maxRating}>/ 5</span>
      </div>
      <div className={s.prices}>
        <p className={s.price}>${price}</p>
      </div>
    </div>
  )
}

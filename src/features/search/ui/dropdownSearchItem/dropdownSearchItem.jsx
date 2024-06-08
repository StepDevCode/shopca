import { renderStars } from '../../../../shared/ui/rating'

import s from './DropdownSearchItem.module.scss'

export const DropdownSearchItem = (props) => {
  const { id, images, title, price, rating } = props

  return (
    <li className={s.item}>
      <img className={s.img} src={images.main} alt={title} />
      <div className={s.info}>
        <h4 className={s.title}>{title}</h4>
        <div className={s.rating}>{renderStars(rating)}</div>
        <p className={s.price}>$ {price}</p>
      </div>
      <div></div>
    </li>
  )
}

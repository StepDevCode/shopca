import s from './ProductPreview.module.scss'

export const ProductPreview = ({ rating }) => {
  const renderStars = () => {
    const stars = []

    for (let i = 0; i < rating; i++) {
      stars.push(<span className={s.star}>&#9733;</span>)
    }
    return stars
  }

  return (
    <div className={s.product}>
      <img className={s.img} src="" alt="" />
      <h4 className={s.title}></h4>
      <div className={s.rating}>{renderStars()}</div>
      <p className={s.price}></p>
    </div>
  )
}

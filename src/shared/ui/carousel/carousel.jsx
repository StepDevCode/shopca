import Slider from 'react-slick'

import './carousel.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = (props) => {
  const { children } = props

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}

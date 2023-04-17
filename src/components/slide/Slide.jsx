import React from 'react'
import './Slide.scss'
import Slider from 'infinite-react-carousel'

// eslint-disable-next-line react/prop-types
const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className='slide'>
      <div className='container'>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  )
}

export default Slide

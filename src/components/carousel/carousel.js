import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { Screens } from '../modifiers'
import { Button } from '../button'
import { Icon } from '../icon'
import './carousel.css'
 
export const CarouselItem = ({ children, className }) => {
  /*
    <div class="is-multi-carousel">
    <div class="is-multi-carousel-inner columns is-variable is-8">
  */
  return <div className={classnames('column', className)}>{children}</div>
}

CarouselItem.displayName = 'BrightleafElements(CarouselItem)'

CarouselItem.sortOrder = 1

export const Carousel = ({
  children,
  isMobile,
  isFluid,
  isWideScreen,
  isFullHD,
  className,
  onClick,
}) => {
  const classes = Screens({ isMobile, isFluid, isWideScreen, isFullHD })
  const childrenAsArray = React.Children.toArray(children) /*.sort(
    (childA, childB) => {
      if (childA.type.sortOrder < childB.type.sortOrder) {
        return -1
      }
      if (childA.type.sortOrder > childB.type.sortOrder) {
        return 1
      }
      return 0
    }
  )
  */
 
  /*
    const total = parseFloat(
      getComputedStyle(innerCnt, null).width.replace("px", "")
    );

    const slidesOnDisplay = total / slideWidth;
  */
  const [carouselOffsest, setCarouselOffsest] = useState(0)

  useEffect(() => {
    // buttons?

  })
  var types = [CardHeader, CardBody, CardFooter, CardImage, CardImageContainer]


  const kids = childrenAsArray.forEach(child => {
    if (
      types.indexOf(child.type) > -1 ||
      (child.props.className && child.props.className.indexOf('column') > -1)
    ) {
      return
    }

    if (child.type.name === 'Collapse') {
      return
    }
    console.warn(`'${child.type}' not allowed`)
  }).map((child) => {

    return child // refs?
  })
  return (
    <div className={classnames('is-multi-carousel', className, classes)}>
      <div class="is-multi-carousel-inner columns is-variable is-8">
        {kids}
      </div>
      <Button className="left-next"><Icon icon="chevron-left" fas /></Button>
      <Button className="right-next"><Icon icon="chevron-right" fas /></Button>
    </div>
  )
}
  /*
    <button class="left-next button">

      <span class="icon">
        <i class="fas fa-chevron-left"></i>
      </span>

    </button>
    <button class="right-next button"><span class="icon">
        <i class="fas fa-chevron-right"></i>
      </span></button>
  */

Carousel.propTypes = {}
Carousel.defaultProps = {
  className: '',
  isMobile: false,
  isFluid: false,
  isWideScreen: false,
  isFullHD: false,
}

Carousel.displayName = 'BrightleafElements(Carousel)'
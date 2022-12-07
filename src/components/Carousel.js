import React, { useState } from 'react';
import config from '../settings.json';
import { Filters } from '../utils/arrayExt';
import CarouselItem from './CarouselItem';

const { items } = config;

const Carousel = () => {
  const [ activeItem, setActiveItem ] = useState(0)

  const featuredItems = items.filter(Filters.byProp("featured"))
  const carouselItems = featuredItems
    .map((data, idx) => {
      return (
        <CarouselItem key={data.name} {...data} active={idx === activeItem} />
      )
    })

  const indicators = featuredItems.map(({name},idx) => {
    return <li key={name} data-target="#myCarousel" 
      data-slide-to="idx" 
      className={activeItem === idx ? "active" : ""} 
      onClick={ () => setActiveItem(idx) }></li>
  })

  return (
    <React.Fragment>
      <div id="theCarousel" className="carousel slide banner_Client" data-ride="carousel">
          <div className="carousel-inner">
              {carouselItems}
          </div>
      </div>
      <ol className="carousel-indicators">
        {indicators}
      </ol>
    </React.Fragment>
  )
}

export default Carousel;
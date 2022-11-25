import { useState } from 'react';
import config from '../../package.json';
import { Filters } from '../utils/arrayExt';
import CarouselItem from './CarouselItem';

const { siteData } = config;

const Carousel = () => {
  const [ activeItem, setActiveItem ] = useState(0)

  const featuredItems = siteData.projects.filter(Filters.byProp("featured"))
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
    <div id="theCarousel" className="carousel slide banner_Client" data-ride="carousel">
        <div className="carousel-inner">
            {carouselItems}
        </div>
        <ol className="carousel-indicators">
          {indicators}
        </ol>
    </div>
  )
}

export default Carousel;
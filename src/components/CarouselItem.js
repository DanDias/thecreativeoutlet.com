import urize from "../utils/urize";

const CarouselItem = ({name, category, thumbnail, active}) => {
  return (
    <div className={"carousel-item" + (active ? " active" : "")}>
        <a href={urize(category, name)}>
          <div className="container">
              <div className="header"></div>
              <div className="carousel-caption text">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="img_bg">
                              <figure><img alt={name} src={thumbnail} /></figure>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </a>
    </div>
  )
}

export default CarouselItem;
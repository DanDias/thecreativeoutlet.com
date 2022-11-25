

const Project = ({name, category, blurb, thumbnail, linkTo=null, featured, short=false}) => {
  if (short) {
    return (<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
        <div className="brand-box">
            <i><img src={thumbnail.indexOf("https") >= 0 ? thumbnail : process.env.PUBLIC_URL + "/" + thumbnail} alt={`${name}`} /></i>
            <h4>{name}</h4>
        </div>
        <a className="buynow" href="#">Learn More</a>
    </div>);
  } else {
    return (<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
    <div className="brand-box">
        <i><img src={thumbnail.indexOf("https") >= 0 ? thumbnail : process.env.PUBLIC_URL + "/" + thumbnail} alt={`${name}`} /></i>
        <h4>{name}</h4>
        <h5>{category}</h5>
        <p>{blurb}</p>
        { linkTo ? <p><a href={linkTo} target="_blank" rel="noreferrer">See More</a></p> : null }
    </div>
</div>)
  }
}

export default Project;
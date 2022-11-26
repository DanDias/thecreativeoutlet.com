const Project = ({name, category, blurb, thumbnail, linkTo=null, featured, short=false}) => {
  if (short) {
    return (<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
        <div className="brand-box">
            <i><img src={thumbnail} alt={`So this is awkward. Programmers are inheriently lazy... thus having an interest in making a machine do all your work for you, eventually. What I'm trying to say is this automated to be whatever thumbnail I add to my configuration. So I can only tell you this is for the project ${name}. In the future, I'll look into supplying a descriptive caption for every one.`} /></i>
            <h4>{name}</h4>
        </div>
        <a className="buynow" href="#">Learn More</a>
    </div>);
  } else {
    return (<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
    <div className="brand-box">
        <i><img src={thumbnail} alt={name} /></i>
        <h4>{name}</h4>
        <h5>{category}</h5>
        <p>{blurb}</p>
        { linkTo ? <p><a href={linkTo} target="_blank" rel="noreferrer">See More</a></p> : null }
    </div>
</div>)
  }
}

export default Project;
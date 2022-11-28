import React from "react";
import SmallHeader from "../components/SmallHeader";
import urize from "../utils/urize";

const Project = ({ name, category, blurb, thumbnail, linkTo = null, featured, short = false }) => {
  // The short version for featured links
  if (short) {
    return (<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
      <div className="brand-box">
        <i><img src={thumbnail} alt={`So this is awkward. Programmers are inheriently lazy... thus having an interest in making a machine do all your work for you, eventually. What I'm trying to say is this automated to be whatever thumbnail I add to my configuration. So I can only tell you this is for the project ${name}. In the future, I'll look into supplying a descriptive caption for every one.`} /></i>
        <h4>{name}</h4>
      </div>
      <a className="buynow" href={urize(category, name)}>Learn More</a>
    </div>);
  }
  // The longer form version for a single page 
  else {
    return (<React.Fragment>
      <SmallHeader />
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-sm-12">
            <div className="layout_padding title">
              <h2>{name}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1">
            <div className="col-md-12 col-xs-1 margintop">
              <div id="brand" className="brand-bg">
                <div className="row">
                  <div className="col-sm-6 col-xs-1">
                    <img src={thumbnail} alt={name} />
                  </div>
                  <div className="col-sm-6 col-xs-1 text">
                    <h4>{name}</h4>
                    <h5>{category}</h5>
                    <p>{blurb}</p>
                    {linkTo ? <p><a href={linkTo} target="_blank" rel="noreferrer">See More</a></p> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)
  }
}

export default Project;
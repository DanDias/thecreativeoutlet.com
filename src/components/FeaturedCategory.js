import React from "react";
import PaginatedList from "./PaginatedList"
import Project from "../routes/Project";
import urize from "../utils/urize";
import { Link } from "react-router-dom";

const FeaturedCategory = ({categoryName, items, maxItems=3}) => {
  const itemsInCategory = items.slice(0, maxItems).map((item) => { return <Project short={true} key={item.id} {...item} /> });

  return (
    <React.Fragment>
      <div id="brand" className="brand-bg">
        <h3>{categoryName}</h3>
        <PaginatedList items={itemsInCategory} />
        <Link className="seemore" to={`${urize(categoryName)}`}>See more</Link>
      </div>
    </React.Fragment>
  );
}

export default FeaturedCategory;
import React from "react";
import { PaginatedList } from "./PaginatedList"
import Project from "../routes/Project";
import urize from "../utils/urize";

const FeaturedCategory = ({categoryName, items}) => {
  const itemsInCategory = items.map((item) => { return <Project short={true} key={item.name} {...item} /> });

  return (
    <React.Fragment>
      <div id="brand" className="brand-bg">
        <h3>{categoryName}</h3>
        <div className="row">
          {itemsInCategory.length > 0 ? itemsInCategory : <span>There's no {categoryName.toLowerCase()} available at the moment!</span>}
        </div>
        <PaginatedList items={items} />
        <a className="seemore" href={`/${urize(categoryName)}`}>See more</a>
      </div>
    </React.Fragment>
  );
}

export default FeaturedCategory;
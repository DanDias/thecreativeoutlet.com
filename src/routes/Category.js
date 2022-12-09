import React from 'react';

import config from '../settings.json';
import PaginatedList from '../components/PaginatedList';
import ReturnTo from '../components/ReturnTo';
import SmallHeader from '../components/SmallHeader';

import { Filters } from '../utils/arrayExt';
import Project from './Project';

const { items } = config;

const Category = ({ name, handleSidebar, children }) => {
  const projectItems = items.filter(Filters.byProp("category",name)).map((props) => {
    return <Project {...props} short={true} handleSidebar={handleSidebar}>{props.name}</Project>
  });

  return (
    <React.Fragment>
      <SmallHeader handleSidebar={handleSidebar} />
      <div id="brand" className="brand-bg">
        <ReturnTo path={'/'} text={'Home'} />
        <h3>{name}</h3>
        <div className="row">
          {projectItems.length > 0 ? <PaginatedList items={projectItems} /> : <span>There's no {name.toLowerCase()} available at the moment!</span>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Category;
import React from 'react';

import config from '../../package.json';
import PaginatedList from '../components/PaginatedList';
import ReturnTo from '../components/ReturnTo';
import SmallHeader from '../components/SmallHeader';

import { Filters } from '../utils/arrayExt';
import Project from './Project';

const {siteData} = config;

const Category = ({ name, children }) => {
  const projectItems = siteData.projects.filter(Filters.byProp("category",name)).map((props) => {
    return <Project {...props} short={true} >{props.name}</Project>
  });

  return (
    <React.Fragment>
      <SmallHeader/>
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
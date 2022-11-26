import React from 'react';
import urize from '../utils/urize';
import { sitePrefix } from '../utils/system';

const CategoryList = ({categories=[]}) => {
  

  const liCategories = categories.map((category) => {
    return (<li key={category}><a href={sitePrefix + '/' + urize([category])}>{category}</a></li>)
  });

  return (<React.Fragment>
    {liCategories}
  </React.Fragment>)
}

export default CategoryList;
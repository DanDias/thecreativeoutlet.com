import React from 'react';
import urize from '../utils/urize';

const CategoryList = ({categories=[]}) => {
  

  const liCategories = categories.map((category) => {
    return (<li key={category}><a href={urize([category])}>{category}</a></li>)
  });

  return (<React.Fragment>
    {liCategories}
  </React.Fragment>)
}

export default CategoryList;
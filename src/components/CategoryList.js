import React from 'react';
import urize from '../utils/urize';

const CategoryList = ({categories=[]}) => {
  

  const liCategories = categories.map((category) => {
    return (<li key={category}><a href={process.env.PUBLIC_URL + '/' + urize([category])}>{category}</a></li>)
  });

  return (<React.Fragment>
    {liCategories}
  </React.Fragment>)
}

export default CategoryList;
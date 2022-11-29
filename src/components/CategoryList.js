import React from 'react';
import { Link } from 'react-router-dom';
import urize from '../utils/urize';

const CategoryList = ({categories=[]}) => {
  

  const liCategories = categories.map((category) => {
    return (<li key={category}><Link to={urize([category])}>{category}</Link></li>)
  });

  return (<React.Fragment>
    {liCategories}
  </React.Fragment>)
}

export default CategoryList;
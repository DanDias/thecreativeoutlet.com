import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import config from '../../package.json';
import PaginatedList from '../components/PaginatedList';
import SmallHeader from '../components/SmallHeader';

import { Filters } from '../utils/arrayExt';
import Project from './Project';

const {siteData} = config;

const Category = ({ name, children }) => {
  const navigate = useNavigate();
  const projectItems = siteData.projects.filter(Filters.byProp("category",name)).map((props) => {
    return <Project {...props} short={true} >{props.name}</Project>
  });

  const handleBack = (event) => {
    navigate('/');
  }

  return (
    <React.Fragment>
      <SmallHeader/>
      <IconButton color='primary' onClick={handleBack}>
        <ArrowBack />
        <p>Back home</p>
      </IconButton>
      <div id="brand" className="brand-bg">
        <h3>{name}</h3>
        <div className="row">
          {projectItems.length > 0 ? <PaginatedList items={projectItems} /> : <span>There's no {name.toLowerCase()} available at the moment!</span>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Category;
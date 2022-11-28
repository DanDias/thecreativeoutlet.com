import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';
import React from 'react';

import config from '../../package.json';
import SmallHeader from '../components/SmallHeader';

import { Filters } from '../utils/arrayExt';

const {siteData} = config;

const Category = ({ name, children }) => {
  const projectItems = siteData.projects.filter(Filters.byProp("category",name)).map((props) => {
    return <div>{props.name}</div>
});

  return (
    <React.Fragment>
      <SmallHeader />
      <div>
        {children}
        <div>
          {projectItems}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Category;
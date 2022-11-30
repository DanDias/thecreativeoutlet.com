import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Loader from './components/Loader';
import Sidebar from './components/Sidebar';

import config from '../package.json';

import Home from './routes/Home';

import { Filters } from './utils/arrayExt';
import urize from './utils/urize';
import Category from './routes/Category';
import SimplePage from './components/SimplePage';
import Project from './routes/Project';
import Cart from './routes/Cart';
import Clues from './routes/Clues';
import Test from './routes/Test';

const { siteData } = config;

function App() {
    const categories = siteData.projects.map(({category}) => category).filter(Filters.dedupe);

    const categoryRoutes = categories.map((category) => {
        return <Route key={category} path={urize(category)} element={
          <Category name={category} />
        } />
      })
      
      const projectRoutes = siteData.projects.map((projData) => {
        const path = urize([projData.category,projData.name]);
        return <Route key={path} path={path} element={<Project {...projData} />} />;
      })

  return (
    <div className="App">
        <Loader />
        <Router>
            <Sidebar categories={categories} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/test' element={<Test />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/clues' element={<Clues />} /> 
                {categoryRoutes}
                {projectRoutes}
            </Routes>
      </Router>
  </div>
  );
}



export default App;

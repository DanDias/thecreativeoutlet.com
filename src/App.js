import React, { useState } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Loader from './components/Loader';
import Sidebar from './components/Sidebar';

import config from './settings.json';

import Home from './routes/Home';

import { Filters } from './utils/arrayExt';
import urize from './utils/urize';
import Category from './routes/Category';
import Project from './routes/Project';
import Cart from './routes/Cart';
import Clues from './routes/Clues';
import Test from './routes/Test';

const { items } = config;

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const categories = items.map(({category}) => category).filter(Filters.dedupe);

    const handleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    }
    const categoryRoutes = categories.map((category) => {
        return <Route key={category} path={urize(category)} element={
          <Category name={category} handleSidebar={handleSidebar} />
        } />
      })
      
      const projectRoutes = items.map((projData) => {
        const path = urize([projData.category,projData.name]);
        return <Route key={path} path={path} element={<Project {...projData}  handleSidebar={handleSidebar}/>} />;
      })

  return (
    <div className="App" onClick={sidebarOpen ? handleSidebar : ()=>{}}>
        <Loader />
        <Router>
            <Sidebar categories={categories} open={sidebarOpen} handleSidebar={handleSidebar} />
            <Routes>
                <Route path="/" element={<Home handleSidebar={handleSidebar} />} />
                <Route path='/test' element={<Test handleSidebar={handleSidebar} />} />
                <Route path='/cart' element={<Cart handleSidebar={handleSidebar} />} />
                <Route path='/clues' element={<Clues handleSidebar={handleSidebar} />} /> 
                {categoryRoutes}
                {projectRoutes}
            </Routes>
      </Router>
  </div>
  );
}



export default App;

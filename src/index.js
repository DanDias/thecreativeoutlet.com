import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter as Router,
  Route,
  Routes} 
  from 'react-router-dom';
import LargeTextLayout from './components/LargeTextLayout';
import urize from './utils/urize';
import config from '../package.json';

const { siteData } = config;

const dynamicRoutes = siteData.projects.map(({name, category}) => {
  const path = urize([category,name]);
  return <Route key={path} path={path} element={<div>{path}</div>} />;
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/test' element={
          <LargeTextLayout text="Awkward...">
          <p>Hello. You've reached my test page. I never know what weird junk is going to be here. So... good luck!</p>
        </LargeTextLayout>
        } />
        {dynamicRoutes}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

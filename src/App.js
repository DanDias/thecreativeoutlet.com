import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Loader from './components/Loader'
import config from '../package.json';
import Sidebar from './components/Sidebar';
import CategoryList from './components/CategoryList';
import Carousel from './components/Carousel';
import FeaturedCategory from './components/FeaturedCategory';
import { Filters } from './utils/arrayExt';

const { siteData } = config;

function App() {
  const categories = siteData.projects.map(({ category }) => {
    return category;
  }).filter(Filters.dedupe);

  const frontPageCategories = siteData.frontpageCategories.map((value, idx) => {
    const catItems = siteData.projects.filter(Filters.byProp("category", value));
    return <FeaturedCategory key={value} categoryName={value} items={catItems} />
  })

  const socialLinks = siteData.socialLinks.map(({service, link}) => {
    return (
      <li>
        <a href={link}><i className={`fa fa-${service}`}></i></a>
      </li>
    )
  })
  
  return (
    <div className="App">
        <Loader />
        <div className="sidebar">
            <Sidebar categories={categories} />
        </div>

        <div id="content">
            <header>
                <div className="head_top">
                    <div className="header">

                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-3 logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo">
                                                <a href="index.html"><img src="images/logo.png" alt="A neat, if I do say so myself, logo with paintbrushes pointed diagonally in the air with the brush ends intersecting. From one brush, red paint drips down. From the other, a blue drop. In the middle triangle the two paintbrushes form is a gradient between Red to Blue, with our signature purple in the middle. I hope you enjoy it." /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="right_header_info">
                                        <ul>
                                            <li className="menu_iconb">
                                                <a href={"tel:"+siteData.contact.phone}><img style={ { marginRight: "15px" } } src="icon/1.png" alt="phone number" />{siteData.contact.phone}</a>
                                            </li>
                                            <li className="tytyu">
                                                <a href="#"> <img style={ { marginRight: "15px"} } src="/icon/2.png" alt="shopping cart" /></a>
                                            </li>
                                            <li className="menu_iconb">
                                                <a href="#"><img style={ { marginRight: "15px"} } src="/icon/3.png" alt="get a clue <3" /></a>
                                            </li>

                                            <li>
                                                <button type="button" id="sidebarCollapse">
                                                    <img src={"images/menu_icon.png"} alt="This is the hamburger menu. But not a menu for hamburgers. It's the three little lines we somehow chose to call a hamburger menu. Crazy, right?" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="slider_section">
                        <div className="banner_main">
                            <div className="container-fluid padding3">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mapimg">
                                        <div className="text-bg">
                                            <h1>Stuff <br />
                                            So<br />
                                            Good</h1>
                                            <span>You'll say, "I don't buy it."</span>
                                            <a href="#">Buy now</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                        <Carousel />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </header>
            <div className="Categories">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2> Categories</h2>
                                <ul className="categiri">
                                    <CategoryList categories={categories} />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {frontPageCategories}
                  </div>
            </div>
        </div>

    <footer>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_top">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    &nbsp;
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <ul className="sociel">
                                        {socialLinks}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ">
                                <div className="address">
                                    <h3>Contact us </h3>
                                    <ul className="loca">
                                        <li>
                                            <a href="https://en.wikipedia.org/wiki/Null_Island" target='_blank' rel='noreferrer'><img src="icon/loc.png" alt="address" /></a>Null Island</li>
                                        <li>
                                            <a href="#"><img src="/icon/call.png" alt="phone" /></a>{siteData.contact.phone} </li>
                                        <li>
                                            <a href={`mailto:${siteData.contact.email}`}><img src="icon/email.png" alt="email" /></a>{siteData.contact.email}</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="address">
                                    <h3>customer service</h3>
                                    <ul className="Menu_footer">
                                        <li className="active"> <a href="#">My account</a> </li>
                                        <li><a href="#">Wishlist</a> </li>
                                        <li><a href="#">My Cart</a> </li>
                                        <li><a href="#">Checkout</a> </li>
                                        <li><a href="#">Login</a> </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 ">
                                <div className="address">
                                    <h3>keep in touch!</h3>
                                    <p>If you want to stay in touch, please fill out this newsletter form. It's a little more impersonal than a social media feed, but really not by much.</p>
                                    <form className="newtetter">
                                        <input className="tetter" placeholder="Your email" type="text" name="Your email" />
                                        <button className="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="copyright"> 
                <div className="container">
                <p>Copyright {new Date().getFullYear()} The Creative Outlet; All Rights to layout reserved by <a href="https://html.design/">Free html Templates</a></p>
            </div>
          </div>
        </div>

    </footer>
  </div>
  );
}



export default App;

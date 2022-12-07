import { Link } from 'react-router-dom';
import config from '../settings.json';
import urize from '../utils/urize';

const { socials, metadata } = config;

const Footer = () => {
  const socialLinks = socials.map(({service, link}) => {
    return (
      <li>
        <Link to={link}><i className={`fa fa-${service}`}></i></Link>
      </li>
    )
  })
  return (<footer>
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
                                      <a href="https://en.wikipedia.org/wiki/Null_Island" target='_blank' rel='noreferrer'><img src="/icon/loc.png" alt="address" /></a>Null Island</li>
                                  <li>
                                      <a href={"tel:"+metadata.contact.phone}><img src="/icon/call.png" alt="phone" /></a>{metadata.contact.phone} </li>
                                  <li>
                                      <a href={`mailto:${metadata.contact.email}`}><img src="/icon/email.png" alt="email" /></a>{metadata.contact.email}</li>
                              </ul>

                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="address">
                              <h3>customer service</h3>
                              <ul className="Menu_footer">
                                  <li className="active"> <Link to={urize('account')}>My account</Link> </li>
                                  <li><Link to={urize('wishlist')}>Wishlist</Link> </li>
                                  <li><Link to={urize('cart')}>My Cart</Link> </li>
                                  <li><Link to={urize('checkout')}>Checkout</Link> </li>
                                  <li><Link to={urize('login')}>Login</Link> </li>
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
</footer>);
}

export default Footer;
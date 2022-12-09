import { Link } from 'react-router-dom';
import config from '../settings.json';

const { metadata } = config;

const SmallHeader = ({ cart=true, clues=true, handleSidebar }) => {
    return (<header>
        <div className="head_top_small">
            <div className="header">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-3 logo_section">
                            <div className="full">
                                <div className="logo top">
                                    <Link to="/"><img src="/images/logo.png" alt="A neat, if I do say so myself, logo with paintbrushes pointed diagonally in the air with the brush ends intersecting. From one brush, red paint drips down. From the other, a blue drop. In the middle triangle the two paintbrushes form is a gradient between Red to Blue, with our signature purple in the middle. I hope you enjoy it." /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="right_header_info">
                                <ul>
                                    <li className="menu_iconb">
                                        <a href={"tel:" + metadata.contact.phone}><img style={{ marginRight: "15px" }} src="/icon/1.png" alt="phone number" />{metadata.contact.phone}</a>
                                    </li>
                                    { cart || <li className="tytyu">
                                        <Link to="cart"> <img style={{ marginRight: "15px" }} src="/icon/2.png" alt="shopping cart" /></Link>
                                    </li> }
                                    { clues||<li className="menu_iconb">
                                        <Link to="clues"><img style={{ marginRight: "15px" }} src="/icon/3.png" alt="get a clue <3" /></Link>
                                    </li> }

                                    <li>
                                        <button type="button" id="sidebarCollapse" onClick={handleSidebar}>
                                            <img src={"/images/menu_icon.png"} alt="This is the hamburger menu. But not a menu for hamburgers. It's the three little lines we somehow chose to call a hamburger menu. Crazy, right?" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header >);
}

export default SmallHeader;
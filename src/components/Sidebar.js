import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const Sidebar = ({categories}) => {

  return (<div className="sidebar">
        <nav id="sidebar">

        <div id="dismiss">
            <i className="fa fa-arrow-left"></i>
        </div>

        <ul className="list-unstyled components">

            <li className="active">
                <Link to='/'>Home</Link>
            </li>
            <CategoryList categories={categories} />
        </ul>

        </nav>
    </div>)
}

export default Sidebar;
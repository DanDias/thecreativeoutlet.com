import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const Sidebar = ({categories, open, handleSidebar}) => {
  return (<Drawer
        anchor='left'
        open={open}
    >
        <nav>
            <div id="dismiss sidebar" onClick={handleSidebar}>
                <i className="fa fa-arrow-left"></i>
            </div>

            <ul className="list-unstyled components">
                <li className="active">
                    <Link to='/'>Home</Link>
                </li>
                <CategoryList categories={categories} />
            </ul>
        </nav>
    </Drawer>)
}

export default Sidebar;
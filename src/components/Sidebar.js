import CategoryList from './CategoryList';

const Sidebar = ({categories}) => {

  return (<div className="sidebar">
        <nav id="sidebar">

        <div id="dismiss">
            <i className="fa fa-arrow-left"></i>
        </div>

        <ul className="list-unstyled components">

            <li className="active">
                <a href='/'>Home</a>
            </li>
            <CategoryList categories={categories} />
        </ul>

        </nav>
    </div>)
}

export default Sidebar;
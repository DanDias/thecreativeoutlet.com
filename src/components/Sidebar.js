import CategoryList from './CategoryList';
import { sitePrefix } from '../utils/system';

const Sidebar = ({categories}) => {

  return <nav id="sidebar">

  <div id="dismiss">
      <i className="fa fa-arrow-left"></i>
  </div>

  <ul className="list-unstyled components">

      <li className="active">
          <a href={sitePrefix}>Home</a>
      </li>
      <CategoryList categories={categories} />
  </ul>

</nav>
}

export default Sidebar;
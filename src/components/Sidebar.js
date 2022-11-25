import CategoryList from './CategoryList';

const Sidebar = ({categories}) => {

  return <nav id="sidebar">

  <div id="dismiss">
      <i className="fa fa-arrow-left"></i>
  </div>

  <ul className="list-unstyled components">

      <li className="active">
          <a href={process.env.PUBLIC_URL}>Home</a>
      </li>
      <CategoryList categories={categories} />
  </ul>

</nav>
}

export default Sidebar;
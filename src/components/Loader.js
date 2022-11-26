import { sitePrefix } from '../utils/system';

const Loader = () => {
  return (
    <div className="loader_bg">
      <div className="loader"><img src={ sitePrefix + "/images/loading.gif"} alt="#" /></div>
    </div>
  )
}

export default Loader;
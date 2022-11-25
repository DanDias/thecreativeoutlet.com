const Loader = () => {
  return (
    <div className="loader_bg">
      <div className="loader"><img src={ process.env.PUBLIC_URL + "/images/loading.gif"} alt="#" /></div>
    </div>
  )
}

export default Loader;
const urize = (category=null,name=null,components=[]) => {
  if (category && name) {
    components = [category,name]
  }
  const path = components.map((comp) => {
    return encodeURIComponent(comp)
      .toLowerCase();
  }).join('/')
  return path; 
}

export default urize;
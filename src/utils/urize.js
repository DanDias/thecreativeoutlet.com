const urize = (category=null,name=null,components=[]) => {
  if (category && name) {
    components = components || [category,name]
  }
  return components.map((comp) => {
    return encodeURIComponent(comp)
      .toLowerCase();
  })
}

export default urize;
const urize = (...parts) => {
  let components = [];
  for(let part of parts) {
    if (Array.isArray(part)) {
      components = components.concat(part);
    } else if (typeof(part) === 'object') {
      console.warn(`Objects are not supported to be put into a uri`)
    }else {
      components.push(part);
    }
  }
  const path = components.map((v) => {
    return v.toLowerCase().replace(/' '/g,'_')
  }).join('/')
  return '/'+path; 
}

export default urize;
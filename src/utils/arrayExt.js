const Filters = {
  dedupe: (item, index, array) => array.indexOf(item) === index,
  byProp: (prop, eq=null, gt=null, lt=null) => (item) => {
    return typeof item[prop] === "boolean" ? item[prop] === true : 
           eq ? item[prop] === eq : 
           gt ? item[prop] > gt : 
           lt ? item[prop] < lt : false;
  }
}

export {Filters}
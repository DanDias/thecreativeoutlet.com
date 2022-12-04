import React from "react";
import SmallHeader from "./SmallHeader";

const SimplePage = ({title, children}) => {
  return (
    <React.Fragment>
      <SmallHeader title={title} />  
      {children}
    </React.Fragment>
  )
}

export default SimplePage;
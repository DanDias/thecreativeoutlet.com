import React from "react";
import SmallHeader from "./SmallHeader";

const SimplePage = ({title, handleSidebar, children}) => {
  return (
    <React.Fragment>
      <SmallHeader title={title} handleSidebar={handleSidebar} />  
      {children}
    </React.Fragment>
  )
}

export default SimplePage;
import { Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";

const PaginatedList = ({items, itemsPerPage=8, itemsPerRow=4, filter=(item,index,array) => { return true; }}) => {
  const [ page, setPage ] = useState(1);

  const maxPages = itemsPerPage%items.length;
  const filteredItems = items
    .filter(filter)
    //.slice(page*itemsPerPage)
    .map((item) => {
      return <Grid item sm={4} key={item.key}>
          {item}
        </Grid>})

  return (<React.Fragment>
    <Grid container spacing={4}>
    {filteredItems}
  </Grid>
  <Container>{ filteredItems.length > itemsPerPage ? <Pagination count={maxPages} defaultPage={1} page={page} /> : null }</Container>
  </React.Fragment>);
}

export default PaginatedList;
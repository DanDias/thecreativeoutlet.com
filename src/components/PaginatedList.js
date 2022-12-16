import { Container, Grid, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";

const PaginatedList = ({items, itemsPerPage=6, itemsPerRow=3, filter=(item,index,array) => { return true; }}) => {
  const [ page, setPage ] = useState(0);

  const maxPages = Math.ceil(items.length/itemsPerPage)-1; // Starting at 0 is more convenient than not.
  const sliceStart = page*itemsPerPage;
  const colSize = 12/itemsPerRow;
  const filteredItems = items
    .filter(filter)
    .slice(sliceStart,sliceStart+itemsPerPage)
    .map((item) => {
      return <Grid item sm={colSize} xl={colSize*2} key={item.id}>
          {item}
        </Grid>
    })
  
  const handleChange = (event,page) => {
    setPage(page-1);
  }

  return (<Stack spacing={itemsPerRow} alignItems="center">
    <Grid container spacing={5}>
    {filteredItems}
  </Grid>
  <Container >{ items.length > itemsPerPage ? <Pagination count={maxPages} color="primary" onChange={handleChange}/> : null }</Container>
  </Stack>);
}

export default PaginatedList;
import { useState } from "react";

const PAGE_NEXT=Symbol("NEXT");
const PAGE_PREV=Symbol("PREV");

const PaginatedList = ({items, itemsPerPage=8, itemsPerRow=4, filter=(item,index,array) => { return true; }}) => {
  const [ page, setPage ] = useState(1);

  const maxPages = items.length%itemsPerPage;
  const filteredItems = items
    .filter(filter)
    .slice(page*itemsPerPage-1,itemsPerPage)
    .map((item, index) => {
      return <li>{item}</li>
    })

  const handleControlClick = (clickedPage) => {
    if (clickedPage !== PAGE_NEXT && clickedPage !== PAGE_PREV) {
      setPage(clickedPage);
    } else if (clickedPage === PAGE_NEXT) {
      setPage(page+1);
    } else if (clickedPage === PAGE_PREV) {
      setPage(page-1);
    } else {
      console.error(`Woah. Pages are all wonky. The handleControlClick function got ${clickedPage}`)
    }
  }

  return (<div>
    <ul>
      {filteredItems}
      <PageControls current={page} max={maxPages} onClick={handleControlClick} />
    </ul>
  </div>)

}

const PageControls = (current, max, onClick) => {
  let pageArray = [];
  for(let i=1;i<=max; i++) {
    pageArray.push(pageArray);
  }
  return pageArray.map((value) => {
    return <li className={ value === current ? "active" : "" } onClick={onClick(value)}>{value}</li>
  });
}

export { PaginatedList, PageControls }
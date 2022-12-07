  
import CategoryList from "../components/CategoryList";
import FeaturedCategory from '../components/FeaturedCategory';
import config from '../settings.json';

import { Filters } from '../utils/arrayExt';
import React from "react";
import FlashyHeader from "../components/FlashyHeader";

const { items, frontpageTags } = config;

const Home = () => {
  const categories = items.map(({ category }) => {
    return category;
  }).filter(Filters.dedupe);

  const frontPageCategories = frontpageTags.map((value, idx) => {
    const catItems = items.filter(Filters.byProp("category", value));
    return <FeaturedCategory key={value} categoryName={value} items={catItems} />
  })

  return (
    <React.Fragment>
        <FlashyHeader />
        <div className="Categories">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            <h2> Categories</h2>
                            <ul className="categiri">
                                <CategoryList categories={categories} />
                            </ul>
                        </div>
                    </div>
                </div>

                {frontPageCategories}
              </div>
        </div>
  </React.Fragment>
)
}

export default Home;
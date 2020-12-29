import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../ArticleCard";
import CategoryCard from "../CategoryCard";

const Landing = (props) => {
  return (
    <div className="mt-8 bg-gray-100 container mx-auto">
      <div className=" my-8 grid grid-cols-4 gap-4">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className=" my-8 grid grid-cols-6 gap-6">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;

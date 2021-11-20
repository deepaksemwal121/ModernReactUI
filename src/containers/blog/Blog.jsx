import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article img={blog1} date="Sep 26, 2021" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article img={blog2} date="Sep 26, 2021" />
          <Article img={blog3} date="Sep 26, 2021" />
          <Article img={blog4} date="Sep 26, 2021" />
          <Article img={blog5} date="Sep 26, 2021" />
        </div>
      </div>
    </div>
  );
};

export default Blog;

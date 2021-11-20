import React from "react";
import "./article.css";

const Article = ({ img, date }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={img} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-text">
        <p>{date}</p>
        <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;

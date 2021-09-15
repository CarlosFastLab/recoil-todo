import React from "react";
import { useRecoilValue } from "recoil";
import articlesState from "../atoms/articlesState";

import Article from "../components/Article";

const Articles = () => {
  const articles = useRecoilValue(articlesState);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;

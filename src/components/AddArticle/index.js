import React, { useState } from "react";
import { useRecoilState } from "recoil";

import articlesState from "../../atoms/articlesState";

const AddArticle = () => {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [bodyInputValue, setBodyInputValue] = useState("");
  const [articles, setArticles] = useRecoilState(articlesState);

  const handleArticleTitle = ({ target: { value } }) => {
    setTitleInputValue(value);
  };

  const handleArticleBody = ({ target: { value } }) => {
    setBodyInputValue(value);
  };

  const saveArticle = () => {
    setArticles((oldArticles) => [
      ...oldArticles,
      {
        id: Math.random(),
        title: titleInputValue,
        body: bodyInputValue,
      },
    ]);
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    setTitleInputValue("");
    setBodyInputValue("");
    saveArticle();
  };

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={titleInputValue}
        onChange={handleArticleTitle}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        value={bodyInputValue}
        onChange={handleArticleBody}
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;

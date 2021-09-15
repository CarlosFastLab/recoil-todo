import { atom } from "recoil";

const articlesState = atom({
  key: "articlesState",
  default: [
    { id: 1, title: "post 1", body: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "post 2", body: "Lorem ipsum dolor sit amet." },
  ],
});

export default articlesState;

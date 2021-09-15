import React, { Fragment } from "react";
import { RecoilRoot } from 'recoil';

import Articles from './containers/Articles';
import AddArticle from './components/AddArticle';


function App() {
  return (
    <RecoilRoot>
       <AddArticle />
       <Articles />
    </RecoilRoot>
    )
}
export default App
import React from "react";

import Container from "./Container";
import SearchForm from "./SearchForm";
import ArticleForm from "./ArticleForm";

const App: React.FC = () => {
  return (
    <Container>
      <SearchForm />
      <ArticleForm />
    </Container>
  );
};

export default App;

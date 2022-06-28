import React from "react";

import Container from "./Container";
import SearchForm from "./SearchForm";
import CreateForm from "./CreateForm";

const App: React.FC = () => {
  return (
    <Container>
      <SearchForm />
      <CreateForm />
    </Container>
  );
};

export default App;

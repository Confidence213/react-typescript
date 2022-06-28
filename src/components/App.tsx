import React from "react";

import Container from "./Container";
import SearchForm from "./SearchForm";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";

const App: React.FC = () => {
  return (
    <Container>
      <SearchForm />
      <CreateForm />
      <UpdateForm />
    </Container>
  );
};

export default App;

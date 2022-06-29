import React from "react";

import Container from "./Container";
import SearchForm from "./SearchForm";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";

const App: React.FC = () => {
  return (
    <Container>
      <SearchForm />
      <CreateForm />
      <UpdateForm />
      <DeleteForm />
    </Container>
  );
};

export default App;

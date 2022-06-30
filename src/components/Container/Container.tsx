import IContainer from "../../types/Container";

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div id="app" className="container d-grid gap-4">
      {children}
    </div>
  );
};

export default Container;

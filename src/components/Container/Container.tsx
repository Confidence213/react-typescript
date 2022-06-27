import IContainer from "../../types/Container";

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div id="app" className="container">
      {children}
    </div>
  );
};

export default Container;

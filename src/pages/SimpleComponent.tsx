const Example = ({ name }: { name: string }) => {
  return <h1>Simple Component: {name}</h1>;
};

const SimpleComponent = () => {
  return <Example name="Example Component" />;
};

export default SimpleComponent;

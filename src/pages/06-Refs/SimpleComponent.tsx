const Example = ({ name }: { name: string }) => {
  return <h1>Refs: {name}</h1>;
};

const RefsComponent = () => {
  return <Example name="Example Component" />;
};

export default RefsComponent;

import { useState } from "react";

const Example = () => {
  const [counter, setCounter] = useState(5);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Simple Component: {counter}</h1>
      <button onClick={handleClick}>counter up</button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        counter down
      </button>
    </>
  );
};

const SimpleState = () => {
  return <Example />;
};

export default SimpleState;

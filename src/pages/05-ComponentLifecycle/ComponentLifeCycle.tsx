import { FunctionComponent, useEffect, useLayoutEffect, useState } from "react";

const Example: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  // the second array as empty, makes the code run on every render
  // also return function is triggered on unmount.
  // this is called a cleanup function
  useEffect(() => {
    console.log("mounted and when the bool is changed");
    return () => {
      console.log("on unmount");
    };
  }, []);

  useLayoutEffect(() => {
    console.log(
      "this is called after userEffect but before the content is painted on the screen"
    );
  }, [count]);

  useEffect(() => {
    console.log("example rendered");
  });

  return (
    <>
      <button onClick={() => setBool(!bool)}>Re render</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        counter up
      </button>
      <p>Count: {count}</p>
    </>
  );
};

const ComponentLifeCycle: FunctionComponent = () => {
  const [makeVisible, setMakeVisible] = useState(true);

  return (
    <>
      <h1>Component lifecycle example</h1>
      <button onClick={() => setMakeVisible(!makeVisible)}>
        Show and Hide
      </button>
      <div
        style={{
          display: "block",
          background: "lightGreen",
          border: "1px solid darkGreen",
          maxWidth: 400,
          margin: "20px auto",
        }}
      >
        {makeVisible && <Example />}
      </div>

      <h2>life cycle stages</h2>
      <ul>
        <li>Mount - initial render</li>
        <li>Update - re-render the component</li>
        <li>unmount - when the component leaves the</li>
      </ul>

      <div
        style={{
          display: "block",
          background: "lightGreen",
          border: "1px solid darkGreen",
          maxWidth: 400,
          margin: "20px auto",
        }}
      >
        NOTE: comment out the `StrictMode` in the index file to make component
        not have extra render cycles.
      </div>
    </>
  );
};

export default ComponentLifeCycle;

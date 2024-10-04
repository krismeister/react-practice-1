import { forwardRef, useRef } from "react";

const MyInput = forwardRef<HTMLInputElement>((props, fRef) => {
  return <input ref={fRef} {...props} placeholder="This is my special input" />;
});

const Example = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const myInputRef = useRef<HTMLInputElement | null>(null);

  const handleOnClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleMyInputFocus = () => {
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  };

  return (
    <>
      <h1>Reference of the input</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleOnClick}>Set foucs</button>
      <hr />
      <h2>This uses a `forwardRef` wrapper</h2>
      <MyInput ref={myInputRef} />
      <button onClick={handleMyInputFocus}>Set My Input focus</button>
      <h2>Ref as a function</h2>
      <p>
        You can also pass a function to an element ref ie.
        ref=&#123;someFunction&#125; <br /> and This function is called on
        mount, and onunmout.
      </p>
    </>
  );
};

const RefsExample = () => {
  return <Example />;
};

export default RefsExample;

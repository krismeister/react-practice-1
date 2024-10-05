import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type ResetHandle = {
  reset: () => void;
};

const CounterExample = forwardRef<ResetHandle>((props, ref) => {
  const [count, setCount] = useState(5);

  useImperativeHandle(ref, () => {
    return {
      reset: () => setCount(0),
    };
  });

  const handleClick = () => {
    setCount(count + 10);
  };

  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleClick}>counter up</button>
    </>
  );
});

const InputExample = forwardRef<ResetHandle>((props, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => {
    return {
      reset: () => setValue(""),
    };
  });
  return (
    <input
      type="text"
      style={{ borderColor: "red" }}
      placeholder="Enter something ..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

const Example = () => {
  const counterRef = useRef<ResetHandle>(null);
  const customImputRef = useRef<ResetHandle>(null);

  const onResetClick = () => {
    counterRef.current?.reset();
    customImputRef.current?.reset();
  };
  return (
    <>
      <h1> Imperative example</h1>
      <hr />
      <CounterExample ref={counterRef} />
      <hr />
      <InputExample ref={customImputRef} />
      <hr />
      <button onClick={onResetClick}>Reset Both</button>
    </>
  );
};

const Imperative = () => {
  return <Example />;
};

export default Imperative;

import { useEffect, useRef, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const prevCount = usePrevious(count);
  const prevText = usePrevious(text);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Previous render count: {prevCount}</p>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Previous render text: {prevText}</p>
    </>
  );
};

function usePrevious(value: string | number) {
  const prevRef = useRef<string | number>();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}

const CustomReactHooks = () => {
  return (
    <>
      <h1>Custom React Hooks</h1>
      <Example />
    </>
  );
};

export default CustomReactHooks;

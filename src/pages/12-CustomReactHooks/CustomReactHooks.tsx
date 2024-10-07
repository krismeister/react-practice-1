import { useEffect, useRef, useState } from "react";
import CodingNotes from "../../components/CodingNote/CodingNote";

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
      <CodingNotes title="Using custom hooks">
        <p>
          Create custom hooks when you want to move functionality into a
          re-usable function for other components to use.
        </p>
        <code>{`
function usePrevious(value: string | number) {
  const prevRef = useRef<string | number>();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}
        `}</code>
      </CodingNotes>
      <CodingNotes
        title="useLocalStorage"
        summary='Use as expected in a component: const [theme, setTheme] = useLocalStorage("theme", "dark") '
      >
        <code>{`
const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
        `}</code>
      </CodingNotes>
    </>
  );
};

export default CustomReactHooks;

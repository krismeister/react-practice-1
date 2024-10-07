import { useEffect, useRef, useState } from "react";
import CodingNotes from "../../components/CodingNote/CodingNote";

type ListItemShape = { value: string; timestamp: number };
const TodoExample = () => {
  const [list, setList] = useState<ListItemShape[]>([]);

  //   useEffect(() => {
  //     if (list.length == 5) {
  //       return null;
  //     }

  //     const url = "someservice?";
  //     const reqeust = async () => {
  //       const response = await fetch(url, {
  //         method: "POST",
  //         body: JSON.stringify(list),
  //       });
  //       return await response.json();
  //     };

  //     const value = reqeust<ListItemShape[]>();
  //     setList(value);
  //   }, [list]);

  return (
    <>
      <ul>
        {list.map((item) => {
          return <li key={item.timestamp}>{item.value}</li>;
        })}
      </ul>
    </>
  );
};

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
    </>
  );
};

export default CustomReactHooks;

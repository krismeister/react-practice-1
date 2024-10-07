import { lazy, Suspense, useMemo, useState } from "react";
import CodingNotes from "../../components/CodingNote/CodingNote";
const LongWaitButton = lazy(() => import("./LongWaitButton"));

const Example = () => {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState("");

  const fibValue = useMemo(() => {
    console.log("FibValue being recalcualted");
    return fib(num);
  }, [num]);

  const onClickHandler = useMemo(() => {
    return () => {
      console.log(logValue);
    };
  }, [logValue]);

  return (
    <>
      <h1>Optimization Example</h1>
      <h2>
        Fib {num} is {fibValue}
      </h2>
      <input
        type="number"
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />
      <br />
      <input
        type="text"
        value={logValue}
        onChange={(e) => setLogValue(e.target.value)}
      />
      {logValue.length > 0 && (
        <Suspense fallback={<div>loading</div>}>
          <LongWaitButton onClick={onClickHandler} />
        </Suspense>
      )}
    </>
  );
};

const fib = (n: number): number => {
  if (n === 2) return 1;
  if (n <= 1) return 0;
  return fib(n - 1) + fib(n - 2);
};

const OptimizationComponent = () => {
  return (
    <>
      <Example />
      <CodingNotes
        title="useMemo"
        summary="useMemo(function(returns a value), dependency array)"
      >
        <p>
          stores the output value of a function until one of the dependency
          items changes.
        </p>
      </CodingNotes>
      <CodingNotes
        title="useCallback"
        summary="useCallback(function, dependency array"
      >
        <p>
          Similar to memo, its when you want to cache an entire function,
          instead of just the return value. Same functionality with the
          dependency array.
        </p>
      </CodingNotes>
      <CodingNotes
        title="lazy and <Suspense>"
        summary="use Lazy to delay importing a component, until its needed, and <suspense> to show loading content."
      >
        <code>
          {`
const LongWaitButton = lazy(() => import("./LongWaitButton"))
...
<Suspense fallback={<div>loading</div>}>
  <LongWaitButton onClick={onClickHandler} />
</Suspense>
          `}
        </code>
      </CodingNotes>
      <CodingNotes
        title="memo"
        summary="memo<props>( FunctionalComponent, comparisionFunction(optional) )"
      >
        <p>
          Wrap a functional component and only re-render it when the properties
          change.
        </p>
      </CodingNotes>
    </>
  );
};

export default OptimizationComponent;

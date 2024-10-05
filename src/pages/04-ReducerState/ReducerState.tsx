import { FunctionComponent, useReducer, useState } from "react";
import CountReducerExampleComponent from "./CountExampleComponent";

interface State {
  values: string[];
}

type Action = { type: "ADD"; toAdd: string } | { type: "REMOVE" };

const reducer = (state: State, action: Action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      if (action.toAdd) {
        return {
          ...state,
          values: [...state.values, action.toAdd],
        };
      }
      break;
    case "REMOVE":
      console.log("inside REMOVE");
      const newValues = [...state.values];
      newValues.pop();
      return {
        ...state,
        values: newValues,
      };
  }
  throw new Error("this should not be reached");
};

const Example: FunctionComponent = () => {
  const [reducerState, dispatch] = useReducer(reducer, { values: ["first!"] });
  const [message, setMessage] = useState("I am the message");

  const handleAddClick = () => {
    if (message) {
      dispatch({ type: "ADD", toAdd: message });
    }
  };

  const handleRemoveClick = () => {
    console.log("hadnle remove click called");
    dispatch({ type: "REMOVE" });
  };

  return (
    <>
      <h1>Reducer State Example</h1>
      <code>{JSON.stringify(reducerState.values, null, 2)}</code>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={handleAddClick}>add message</button>
      <button onClick={handleRemoveClick}>remove latest</button>
    </>
  );
};

const Example2: FunctionComponent = () => {
  const [reducerState] = useReducer(reducer, { values: ["first!"] });
  return (
    <>
      <h1>Using same reducer but only outputing, see the bug</h1>
      <code>{JSON.stringify(reducerState.values, null, 2)}</code>
    </>
  );
};

const ReducerStateComponent = () => {
  return (
    <>
      <CountReducerExampleComponent />
      <hr />
      <Example />
      <hr />
      <Example2 />
    </>
  );
};

export default ReducerStateComponent;

import { useState } from "react";

const Example = () => {
  const [items, setItems] = useState<{ value: string; timestamp: number }[]>([
    { value: "starting item", timestamp: 0 },
  ]);
  const [newItem, setNewItem] = useState("");

  const onAddClickHandler = () => {
    if (newItem.length) {
      setItems([
        ...items,
        {
          value: newItem,
          timestamp: new Date().getTime(),
        },
      ]);
      setNewItem("");
    }
  };

  return (
    <>
      <h1>Component List</h1>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.currentTarget.value)}
        placeholder="enter a new item ..."
      />
      <button onClick={onAddClickHandler}>Add List Item</button>

      <ul>
        {items.map(({ value, timestamp }) => {
          return <li key={timestamp}>{value}</li>;
        })}
      </ul>
    </>
  );
};

const ComponentList = () => {
  return <Example />;
};

export default ComponentList;

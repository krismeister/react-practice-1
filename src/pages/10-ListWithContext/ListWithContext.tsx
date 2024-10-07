import { Fragment, FunctionComponent, useContext, useState } from "react";
import { ListContext, ListContextProvider, ListType } from "./ListContext";

const ListItem: FunctionComponent<{ item: ListType }> = ({ item }) => {
  const { moveUp, moveDown } = useContext(ListContext);

  return (
    <>
      <li>
        {item.timestamp} - {item.value}
        <button onClick={() => moveUp(item)}>Move Up</button>
        <button onClick={() => moveDown(item)}>Move Down</button>
      </li>
    </>
  );
};

const Example = () => {
  const { items, addItem } = useContext(ListContext);
  const [newItem, setNewItem] = useState("");

  const onAddClickHandler = () => {
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.currentTarget.value)}
        placeholder="enter a new item ..."
      />
      <button onClick={onAddClickHandler}>Add List Item</button>

      <ul>
        {items.map((item) => {
          return (
            <Fragment key={item.timestamp}>
              <ListItem item={item} />
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

const ListWithContext = () => {
  return (
    <>
      <h1>List With Context</h1>
      <ListContextProvider>
        <Example />
      </ListContextProvider>
    </>
  );
};

export default ListWithContext;

import { createContext, FunctionComponent, ReactNode, useState } from "react";

export type ListType = { value: string; timestamp: number };

type ListShape = {
  addItem: (value: string) => void;
  moveUp: (item: ListType) => void;
  moveDown: (item: ListType) => void;
  items: ListType[];
};

const ListContext = createContext<ListShape>({
  addItem: () => {},
  moveUp: () => {},
  moveDown: () => {},
  items: [],
});

const ListContextProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ListType[]>([
    { value: "starting item", timestamp: 0 },
  ]);

  const addItem = (value: string) => {
    console.log("add item", value);

    if (value.length) {
      setItems([
        ...items,
        {
          value: value,
          timestamp: new Date().getTime(),
        },
      ]);
    }
  };

  const moveUp = (item: ListType) => {
    console.log("moveUp item", item);
    moveDirection(item, "UP");
  };

  const moveDown = (item: ListType) => {
    console.log("moveDown item", item);
    moveDirection(item, "DOWN");
  };

  const moveDirection = (item: ListType, direction: "UP" | "DOWN") => {
    const fromI = items.indexOf(item);
    const newI = direction === "UP" ? fromI - 1 : fromI + 1;

    if (direction === "UP" && newI === -1) {
      return;
    }

    if (direction === "DOWN" && newI === items.length) {
      return;
    }

    const newItems = [...items];

    // Remove the item from the array at the fromIndex
    newItems.splice(fromI, 1);

    // Insert the moved item at the toIndex
    newItems.splice(newI, 0, item);

    setItems(newItems);
  };

  return (
    <ListContext.Provider value={{ items, addItem, moveUp, moveDown }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListContextProvider };

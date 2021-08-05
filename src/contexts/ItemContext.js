import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [columns, setColumns] = useState(["COLUMN 1", "COLUMN 2"]);
  const [items, setItems] = useState([
    { desc: "evelyn1", column: "COLUMN 1", id: 1 },
    { desc: "evelyn2", column: "COLUMN 2", id: 2 },
    { desc: "evelyn3", column: "COLUMN 1", id: 3 },
    { desc: "evelyn4", column: "COLUMN 2", id: 4 },
  ]);

  const addItem = (desc, column) => {
    setItems([...items, { desc, column, id: uuidv4() }]);
    if (column === "COLUMN 1") {
      setColumns("COLUMN 1");
    } else if (column === "COLUMN 2") {
      setColumns("COLUMN 2");
    }
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const searchItem = (desc) => {
    setItems(items.filter((item) => item.desc.includes(desc)));
  };

  // const [displayOverlay, setDisplayOverlay] = useState(false);
  // const [message, setMessage] = useState("");

  // const showModal = (desc, column) => {
  //   if (desc === "") {
  //     setDisplayOverlay(true);
  //     setMessage("Please enter the item name 🤔");
  //   } else if (column === "") {
  //     setDisplayOverlay(true);
  //     setMessage("Please select the column 🤔");
  //   }
  // };

  return (
    <ItemContext.Provider
      value={{
        columns,
        items,
        addItem,
        removeItem,
        searchItem,
        // displayOverlay,
        // message,
        // showModal,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;

import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [columns, setColumns] = useState(["COLUMN 1", "COLUMN 2"]);

  const [items, setItems] = useState([
    { desc: "evelyn1", column: "COLUMN 1", id: 1 },
    { desc: "evelyn2", column: "COLUMN 2", id: 2 },
    { desc: "evelyn3", column: "COLUMN 1", id: 3 },
    { desc: "evelyn4", column: "COLUMN 2", id: 4 },
    { desc: "evelyn5", column: "COLUMN 2", id: 5 },
    { desc: "evelyn6", column: "COLUMN 1", id: 6 },
    { desc: "evelyn7", column: "COLUMN 1", id: 7 },
    { desc: "evelyn8", column: "COLUMN 1", id: 8 },
    { desc: "evelyn9", column: "COLUMN 2", id: 9 },
  ]);

  const [displayOverlay, setDisplayOverlay] = useState(false);
  const [message, setMessage] = useState("");

  //add item function
  const addItem = (desc, column) => {
    if (desc && column) {
      setItems([...items, { desc, column, id: uuidv4() }]);
    } else {
      showModal();
    }
  };

  //show the modal
  const showModal = (column) => {
    if (!column) {
      setDisplayOverlay(true);
      setMessage("Please select the column 🤔");
    }
  };
  const closeModal = () => {
    setDisplayOverlay(false);
  };

  //remove item function
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  //search item function
  const searchItem = (desc) => {
    if (desc === "") {
      setItems(items);
    } else {
      let filteredItems = items.filter((item) => item.desc.includes(desc));
      setItems(filteredItems);
    }
  };

  //local storage
  useEffect(() => {
    const data = localStorage.getItem("item");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider
      value={{
        columns,
        items,
        addItem,
        removeItem,
        searchItem,
        displayOverlay,
        message,
        showModal,
        closeModal,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;

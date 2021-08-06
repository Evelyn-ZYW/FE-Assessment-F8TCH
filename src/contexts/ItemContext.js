import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  //state - initial columns
  const [columns, setColumns] = useState(["COLUMN 1", "COLUMN 2"]);

  //state - initial items
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

  //state - search result
  const [results, setResults] = useState([]);

  //state - search keyword
  const [keyword, setKeyword] = useState(false);

  //state - popup modal & the message
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const [message, setMessage] = useState("");

  //function - add item
  const addItem = (desc, column) => {
    if (desc && column) {
      setItems([...items, { desc, column, id: uuidv4() }]);
    } else {
      showModal();
    }
  };

  //function - show the modal
  const showModal = (column) => {
    if (!column) {
      setDisplayOverlay(true);
      setMessage("Please select the column 🤔");
    }
  };

  //function - close the modal
  const closeModal = () => {
    setDisplayOverlay(false);
  };

  //function - remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  //function - search item
  const searchItem = (desc) => {
    if (desc === "") {
      setResults([]);
      setKeyword(false);
    } else {
      setResults(items.filter((item) => item.desc.includes(desc)));
      setKeyword(true);
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
        results,
        setResults,
        displayOverlay,
        message,
        showModal,
        closeModal,
        keyword,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;

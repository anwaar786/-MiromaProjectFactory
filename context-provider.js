import React, { useState, useEffect, createContext } from 'react';

export const DataContaxt = createContext('DataContext');

const ContextProvider = props => {
  const [toDoItemsData, setToDoItemsData] = useState([]);
  const value = {
    toDoItemsData,
    setToDoItemsData,
  };

  return (
    <DataContaxt.Provider
      value={value}>{props.children}
    </DataContaxt.Provider>
  );
};

export default ContextProvider;

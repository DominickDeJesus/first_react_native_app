import React, { createContext, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // global state that can be used in any component in our application
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        results,
        setResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

import React, { createContext, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // global state that can be used in any component in our application
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

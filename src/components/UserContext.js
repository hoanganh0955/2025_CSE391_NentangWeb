import React, { createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children, user }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}

"use client"

import { ReactNode, createContext } from "react";

export const cartContext = createContext<any>(null);


const ContextWrapper = ({children}:{children:ReactNode}) => {
  const name = "usman"
  return (
    <cartContext.Provider value={name}>
      {children}
    </cartContext.Provider>
  )
}

export default ContextWrapper
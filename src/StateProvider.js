// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// This is the Data Layout
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
          {children}
    </StateContext.Provider>
)
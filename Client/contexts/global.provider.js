import React, { createContext, useReducer } from 'react'

// initial states
import appInitial from './initialStates/appInitial.state';

// reducers
import appReducer from './reducers/app.reducer'

// create context
export const GlobalContext = createContext({});

// provider
export const GlobalProvider = ({ children }) => {
  const [ appState, appDispatch ] = useReducer(appReducer, appInitial);

  return (
    <GlobalContext.Provider
      value={{
        appState, appDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

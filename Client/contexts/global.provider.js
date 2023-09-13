import React, { createContext, useReducer } from 'react'

// initial states
import appInitial from './initialStates/appInitial.state';
import subscriberInitial from './initialStates/subscriberInitial.state';

// reducers
import appReducer from './reducers/app.reducer'
import subscriberReducer from './reducers/subscriber.reducer'

// create context
export const GlobalContext = createContext({});

// provider
export const GlobalProvider = ({ children }) => {
  const [ appState, appDispatch ] = useReducer(appReducer, appInitial);
  const [ subscriberState, subscriberDispatch ] = useReducer(subscriberReducer, subscriberInitial);

  return (
    <GlobalContext.Provider
      value={{
        appState, appDispatch,
        subscriberState, subscriberDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// ***********************
// Subscriber
// ***********************

export const setEmail = (email) => (dispatch) => {
  try {
    dispatch({type: "SET_SUBSCRIBER_EMAIL", payload: email})
  } catch(err){
    dispatch({type: "SET_SUBSCRIBER_EMAIL", payload: ""})
  }
}

export const setResponseMessage = (message) => (dispatch) => {
  try {
    dispatch({type: "SET_RESPONSE_MESSAGE", payload: message})
  } catch(err){
    dispatch({type: "SET_RESPONSE_MESSAGE", payload: ""})
  }
}

export const setAlreadySubscribed = (status) => (dispatch) => {
  try {
    dispatch({type: "SET_SUBSCRIBER_STATUS", payload: status})
  } catch(err){
    dispatch({type: "SET_SUBSCRIBER_STATUS", payload: ""})
  }
}
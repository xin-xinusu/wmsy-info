// ***********************
// Popup
// ***********************

// Activate / Deactivate notice bar
export const togglePopupState = (state, content, excludeCloseButton) => (dispatch) => {
  dispatch({type: "TOGGLE_POPUP_STATE", payload: {state, content, excludeCloseButton}})
}
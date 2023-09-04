export default (state, { payload, type }) => {
  switch(type) {

    case "TOGGLE_POPUP_STATE":
      return {
        ...state,
        appModes: {
          ...state.appModes,
          popup: {
            ...state.appModes.popup,
            isOpen: payload.state ? payload.state : false,
            content: payload.content ? payload.content : null,
            excludeCloseButton: payload.excludeCloseButton ? payload.excludeCloseButton : false
          }
        }
      }


      default:
      return state;
  }
}

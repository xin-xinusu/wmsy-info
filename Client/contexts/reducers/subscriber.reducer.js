export default (state, { payload, type }) => {
  switch(type) {

      case "SET_SUBSCRIBER_EMAIL":
      return {
        ...state,
        signup: {
          email: payload,
        }
      }

      case "SET_RESPONSE_MESSAGE":
      return {
        ...state,
        responseMessage: payload
      }

      case "SET_SUBSCRIBER_STATUS":
      return {
        ...state,
        status: {
          alreadySubscribed: payload
        }
      }

      default:
      return state;
  }
}

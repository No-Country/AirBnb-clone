const initialState = {loading: false, token: null, error:null, expiresIn:null}
const loginReducer = (state = initialState, action) => {
  switch(action.type){
      case "LOADING_LOGIN":
        return {
          ...state,
          loading: action.payload,
        };
      case "SAVE_TOKEN":
        return {
          ...state,
          token: action.payload
        };
      case "SAVE_EXPIRESIN":
        return{
          ...state,
          expiresIn:action.payload
        };
      case "SAVE_ERROR":
        return{
          ...state,
          error:action.payload
        };
      case "DELETE_TOKEN":
        return{
          ...state,
          token:null,
        };
      default: 
          return state
  }
}

export default loginReducer
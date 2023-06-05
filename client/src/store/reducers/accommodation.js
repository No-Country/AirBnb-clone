const { default: accommodation } = require("../actions/accommodation")

const initialState = {loading:false, accommodations:[], currentAccommodation:null}
const accommodationReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'IS_LOADING_ACCOMMODATIONS':
            return {
                ...state,
                loading:action.payload
            }
        case 'SAVE_ACCOMODATIONS':
            return{
                ...state,  
                accommodations:action.payload
            }
        case 'SAVE_ACCOMODATION':
            return{
                ...state,  
                currentAccommodation:action.payload
            }
        default:
            return state;
        }
}

export default accommodationReducer;
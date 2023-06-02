import api from "@/api/api";
import allActions from ".";

const getAccomodations = () =>{
    return async (dispatch) =>{
        try{
            dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:true})
            await api.get("accommodation/")
            .then(res=>{
                dispatch({type:"GET_ACCOMMODATIONS", payload:res.data})
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
            })
            .catch(error=>{
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
                dispatch({
                    type: "SAVE_ERROR",
                    payload: error.response.data.message,
                  });
            }
                )
        }catch(e){
            console.log(e)
            dispatch({ type: "IS_LOADING_ACCOMMODATIONS", payload: false });
        }
    }
}

const getAccomodation = (id) =>{
    return async (dispatch, getState) =>{
        try{
            dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:true})
            await api.get(`accommodation/${id}`)
            .then(res =>{
                dispatch({type:"SAVE_CURRENT_ACCOMMODATION", payload:res.data})
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
            })
            .catch(function (error){
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
                dispatch({
                    type: "SAVE_ERROR",
                    payload: error.response.data.message,
                })
            })
        }catch(e){
            console.log(e)
            dispatch({ type: "IS_LOADING_ACCOMMODATIONS", payload: false });
        }
    }
}

const deleteAccommodation = () =>{
    return async(dispatch,getState)=>{
        try {
            dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:true})
            const token = getState().auth.token
            await api.get(`accommodation/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
              })
            .then(res =>{
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
            })
            .catch(function(error){
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
                dispatch({
                    type: "SAVE_ERROR",
                    payload: error.response.data.message,
                  });
            })
        } catch (e) {
            console.log(e)
            dispatch({ type: "IS_LOADING_ACCOMMODATIONS", payload: false });
        }
    }
}

const updateAccommodation = (body) =>{
    return async(dispatch, getState)=>{
        try {
            dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:true})
            const token = getState().auth.token
            await api.put(`accommodation/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
                body:{body}
              })
            .then(res=>{
                dispatch({type:"GET_ACCOMMODATIONS", payload:res.data})
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
                dispatch(allActions.authActions.getAccomodations())
            })
            .catch(res=>{
                dispatch({type:"IS_LOADING_ACCOMMODATIONS", payload:false})
            })
        } catch (error) {
            console.log(e)
            dispatch({ type: "IS_LOADING_ACCOMMODATIONS", payload: false });
        }
    }
}

export default {
  getAccomodations,
  getAccomodation,
  deleteAccommodation,
  updateAccommodation
};

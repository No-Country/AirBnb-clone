'use client'

import api from '@/api/api';
import allActions from '.';
import { setLoading,setError, setUser } from '../slices/user';

export const getUser = () =>{
    return async (dispatch) => {  
        try {
            dispatch(setLoading(true));
            await api
            .get(`users/${id}`)
            .then((res)=>{
                dispatch(setUser(res.data))
                dispatch(setLoading(false))
            })
            .catch(function (error) {
                dispatch(setLoading(false));
                dispatch(setError(error.response.data.message));
              });
        } catch (error) {
            console.log(error)
            dispatch(setLoading(false))
        }
    
    }
}

export default{
    getUser,
}
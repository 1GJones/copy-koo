import { useEffect, useReducer } from "react";
// import { setAccessToken } from "../../utils/api.utils";

import React from 'react'

const initialState = {
    user: null, 
    isAuthenticated: null,
  }
  
  export const SIGNIN = "SIGNIN";
  export const SIGNOUT = "SIGNOUT";
  
  const authReducer = (state=initialState, action) => {
    switch(action.type) {
      case SIGNIN: {
        return {
          ...state, 
          user: action.payload,
          isAuthenticated: true,
        }
      }
      case SIGNOUT: 
      return {
        ...state, 
        user: null, 
        isAuthenticated: false,
      }
      default: {
        return state;
      }
    }
  };
  

const useAuthProvider = () => {
    const [state ,dispatch]=useReducer(authReducer, initialState)

    useEffect (()=>{
        const localAuth =JSON.parse(localStorage.getItem("test-auth"))  || null;
        if (localAuth) {
          dispatch({ type: "SIGNIN", payload: localAuth.user });
        }
      }, []);
    
      return { state, dispatch };
    };
    
    export default useAuthProvider;
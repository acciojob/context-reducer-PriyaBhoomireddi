import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  isAuthenticated: false,
  currentUser: '',
  items: [],
};

// Create context
export const AuthContext = createContext(initialState);

// Reducer function to manage authentication and items list
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, currentUser: 'rohan' };
    case 'SIGNOUT':
      return { ...state, isAuthenticated: false, currentUser: '', items: [] };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item !== action.payload) };
    case 'CLEAR_ITEMS':
      return { ...state, items: [] };
    default:
      return state;
  }
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

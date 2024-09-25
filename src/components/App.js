import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const App = () => {
  const { state, dispatch } = useContext(AuthContext); // Access the context state and dispatch
  const [inputValue, setInputValue] = useState(''); // Input state

  // Login handler
  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  // Signout handler
  const handleSignout = () => {
    dispatch({ type: 'SIGNOUT' });
  };

  // Add item handler
  const handleAddItem = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_ITEM', payload: inputValue });
      setInputValue('');
    }
  };

  // Remove item handler
  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  // Clear list handler
  const handleClearList = () => {
    dispatch({ type: 'CLEAR_ITEMS' });
  };

  return (
    <div>
      <h1>Shopping List App</h1>

      {/* Login and Signout buttons */}
      <button id="login-btn" onClick={handleLogin}>
        Login
      </button>
      <button id="signout" onClick={handleSignout}>
        Signout
      </button>

      {/* Display current user info */}
      <p id="current-user">
        Current user: {state.currentUser}, isAuthenticated: {state.isAuthenticated ? 'Yes' : 'No'}
      </p>

      {/* Input box */}
      <input
        id="shopping-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />

      {/* Add button */}
      <button onClick={handleAddItem}>Add</button>

      {/* Display the list of items */}
      <ul>
        {state.items.map((item, index) => (
          <li key={index} id={`item-${item}`}>
            {item}
            <button id={`remove-${item}`} onClick={() => handleRemoveItem(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Clear list button */}
      <button id="clear-list" onClick={handleClearList}>
        Clear List
      </button>
    </div>
  );
};

export default App;

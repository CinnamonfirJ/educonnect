import { createContext, useContext, useState } from "react";

// Create the LoginContext
const LoginContext = createContext();

// Provider component for LoginContext
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login status
  const loginUser = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, loginUser }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook to use the LoginContext
export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

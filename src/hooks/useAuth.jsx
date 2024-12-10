import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom hook to use the LoginContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

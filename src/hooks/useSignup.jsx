import { useState } from "react";
import { useAuthContext } from "./useAuth";

export const useSignup = () => {
  const [error, setError] = useState(null); // null instead of an empty string for better error handling
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async ({ name, email, password, confirm_password }) => {
    setError(null);
    setIsLoading(true);
    dispatch({ type: "LOGIN", payload: null });
    const token =
      "c2505e1877c35bff219c55c2820a0300a1fa3fdf33289e3fc5036c8fce2021d2";

    try {
      const response = await fetch(
        `https://educonnect-fv60.onrender.com/api/v1/auth/signup`, // Ensure this URL is accessible
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            // Accept: "application/json", // Matches the curl request
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirm_password, // Matches the backend API's field name
          }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "An error occurred.");
        return;
      }

      // Step 3: Fetch the user data
      const userResponse = await fetch(
        `https://educonnect-fv60.onrender.com/api/v1/auth/user`, // Replace with the correct Get User endpoint
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userData = await userResponse.json();

      if (!userResponse.ok) {
        setIsLoading(false);
        setError(userData.error || "Failed to fetch user data.");
        return;
      }

      // Step 4: Store user data in context and localStorage
      console.log("User Data:", userData);
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({ type: "LOGIN", payload: userData });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return { signup, error, isLoading };
};

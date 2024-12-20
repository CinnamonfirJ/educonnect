import { useState } from "react";
import { useAuthContext } from "./useAuth";

export const useLogin = () => {
  const [error, setError] = useState(null); // null instead of an empty string for better error handling
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async ({ email, password }) => {
    setError(null);
    setIsLoading(true);
    dispatch({ type: "LOGIN", payload: null });
    const token =
      "c2505e1877c35bff219c55c2820a0300a1fa3fdf33289e3fc5036c8fce2021d2";

    try {
      const response = await fetch(
        `https://educonnect-fv60.onrender.com/api/v1/auth/signin`, // Ensure this URL is accessible
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            // Accept: "application/json", // Matches the curl request
          },
          body: JSON.stringify({
            email,
            password,
            // Matches the backend API's field name
          }),
        }
      );

      const json = await response.json();
      console.log(JSON.stringify({ email, password }));
      localStorage.setItem("token", json.results.token);
      console.log(json.results.token);

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "An error occurred.");
        return;
      }

      console.log(JSON.stringify(json));
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return { login, error, isLoading };
};

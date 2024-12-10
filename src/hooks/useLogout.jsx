import { useAuthContext } from "./useAuth";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    const token = localStorage.getItem("token"); // Get token from localStorage

    if (!token) {
      console.error("No token found for logout");
      return;
    }

    try {
      const response = await fetch(
        "https://educonnect-fv60.onrender.com/api/v1/auth/signout",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Logout failed:", error.message || error);
        return;
      }

      console.log("Logout successful");

      // Clear localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      // Dispatch logout action
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { logout };
};

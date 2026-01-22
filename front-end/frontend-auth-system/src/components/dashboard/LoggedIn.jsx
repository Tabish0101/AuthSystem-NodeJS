import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile.jsx";
import { logoutApi } from "../../apis/auth.apis.js";

const LoggedIn = ({ onLogout }) => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logoutApi();
      onLogout();
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  function onLogout() {
    sessionStorage.removeItem("accessToken");
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-2">
          Welcome 🎉
        </h2>

        <UserProfile />

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-6 py-2.5 text-white font-medium hover:bg-red-600 transition duration-200 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoggedIn;

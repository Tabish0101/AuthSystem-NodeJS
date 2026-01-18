import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.get("/api/dashboard/profile");
      setProfile(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={fetchProfile}
        disabled={loading}
        className="px-3.5 py-1.5 bg-emerald-600 text-white rounded-full border-emerald-200 disabled:bg-gray-400 cursor-pointer"
      >
        {loading ? "Loading Profile..." : "Fetch My Profile"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {profile && (
        <div className="mt-4 p-4 border rounded shadow-sm">
          <h3 className="font-bold text-lg">Welcome, {profile.username}!</h3>
          <p>Email: {profile.email}</p>
          <p>Role: {profile.role}</p>
          <p>Account Status: {profile.isVerified ? "Verified" : "Pending"}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

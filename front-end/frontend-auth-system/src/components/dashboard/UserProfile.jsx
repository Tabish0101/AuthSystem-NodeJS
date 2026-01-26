import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getProfileDataApi } from "../../apis/auth.apis";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileDataApi,
    enabled: false,
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getProfileDataApi();
      setProfile(data.user);
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

      {loading &&
        // Skeleton Loader
        loading && (
          <div className="bg-slate-200 h-[50px] w-[100px] animate-pulse border-slate-600 border-2"></div>
        )}
    </div>
  );
};

export default UserProfile;

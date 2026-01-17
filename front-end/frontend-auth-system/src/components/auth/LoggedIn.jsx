const LoggedIn = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-2">
          Welcome 🎉
        </h2>

        <p className="text-gray-600 mb-6">
          You are logged in
          {user?.email && ` as ${user.email}`}
        </p>

        <button
          onClick={onLogout}
          className="rounded-lg bg-red-500 px-6 py-2.5
                     text-white font-medium hover:bg-red-600
                     transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoggedIn;

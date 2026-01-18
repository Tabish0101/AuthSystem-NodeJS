import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import RegisterUser from "./components/auth/RegisterUser.jsx";
import LoggedIn from "./components/dashboard/LoggedIn.jsx";

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />

      {/* Logged-in / dashboard */}
      <Route path="/dashboard" element={<LoggedIn />} />

      {/* Fallback */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;

import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../store/AuthStore";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const getProfilePath = () => {
    if (!user) return "/";
    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";
      case "ADMIN":
        return "/admin-profile";
      default:
        return "/user-profile";
    }
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-semibold tracking-tight text-gray-900"
        >
          InkFlow
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <NavLink to="/" className="hover:text-black">Home</NavLink>

          {isAuthenticated && (
            <NavLink to={getProfilePath()} className="hover:text-black">
              Dashboard
            </NavLink>
          )}

          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className="hover:text-black">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Get Started
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
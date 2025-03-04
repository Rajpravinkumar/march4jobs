import { Link } from "react-router"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between bg-gray-900 p-4 text-white">
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/register" className="mr-4">
            Register
          </Link>
          <Link to="/login" className="mr-4">
            Login
          </Link>
        </div>
      </nav>

      <main className="flex-grew">{children}</main>
    </div>
  );
};

export default Layout;

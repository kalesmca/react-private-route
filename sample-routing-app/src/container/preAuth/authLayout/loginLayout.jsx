import React, {useContext} from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { AuthContext } from "../../../auth";


export const LoginLayout = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/dashboard/profile" />;
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  )
};
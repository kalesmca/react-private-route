import React, {useContext} from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { AuthContext } from "../../../auth";

export const ProtectedLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  )
};
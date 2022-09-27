import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// to check if the user is Authenticated
// if yes take him to the protected route
// else navigate/redirect to login page
const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
  console.log(location);
  if (!auth) {
    return <Navigate to="/login" replace state={{ data: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;

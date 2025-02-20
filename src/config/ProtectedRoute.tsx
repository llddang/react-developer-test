import { isInvalidAuth } from "@/libs/utils/auth.util";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { pathname } = useLocation();

  if (isInvalidAuth())
    return (
      <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />
    );

  return <Outlet />;
}

import { useTokenStore } from "@/stores/token.store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { pathname } = useLocation();
  const isAuth = useTokenStore().isValidToken();

  if (isAuth) return <Outlet />;

  return (
    <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />
  );
}

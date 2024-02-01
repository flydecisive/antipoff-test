import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath: string;
  isAllowed: boolean;
}

function ProtectedRoute({
  redirectPath = "/login",
  isAllowed,
}: ProtectedRouteProps) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;

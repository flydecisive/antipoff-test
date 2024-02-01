import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected-route";

interface AppRoutesProps {
  isAllowed: boolean;
}

function AppRoutes({ isAllowed }: AppRoutesProps) {
  return (
    <Routes>
      <Route
        element={<ProtectedRoute redirectPath="/login" isAllowed={isAllowed} />}
      >
        <Route path="/" element />
        <Route path="/user/:id" element />
      </Route>
      <Route path="/login" element />
      <Route path="/register" element />
    </Routes>
  );
}

export default AppRoutes;

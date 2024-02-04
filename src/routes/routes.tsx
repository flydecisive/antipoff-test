import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import Main from "../pages/main/main";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import User from "../pages/user/user";
interface AppRoutesProps {
  isAllowed: boolean;
}

function AppRoutes({ isAllowed }: AppRoutesProps) {
  return (
    <Routes>
      <Route
        element={<ProtectedRoute redirectPath="/login" isAllowed={isAllowed} />}
      >
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<User />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;

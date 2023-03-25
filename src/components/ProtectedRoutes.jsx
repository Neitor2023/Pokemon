import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
        if (100 > 10) {
            return <Outlet />
        } else {
            return <Navigate to="/login" />
        }
};

export default ProtectedRoutes;
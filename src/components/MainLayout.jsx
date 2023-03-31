import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="general-container">
            {/* <aside className="aside"> */}
            <aside>
                
            </aside>
            <Outlet />
        </div>
    );
};

export default MainLayout;
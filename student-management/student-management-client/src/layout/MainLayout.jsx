import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div className="px-5">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
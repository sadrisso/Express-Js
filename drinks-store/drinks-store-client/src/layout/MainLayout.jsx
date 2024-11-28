import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="mt-11">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
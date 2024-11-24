import { Outlet } from "react-router-dom";
import Header from "./Header";


const Main = () => {
    return (
        <div>
            This is main
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;
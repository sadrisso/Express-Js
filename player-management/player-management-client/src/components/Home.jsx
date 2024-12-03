import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="bg-banner-bg bg-cover bg-no-repeat bg-center min-h-[800px]">

            </div>
            <div className="mt-20">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
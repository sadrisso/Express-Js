import { useLoaderData } from "react-router-dom";
import TeaCard from "./TeaCard";


const Home = () => {

    const teas = useLoaderData()
    console.log(teas)

    return (
        <>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-semibold mb-3">Your Favourite Teas</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere rem earum nostrum quia modi.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {
                    teas.map((tea, i) => <TeaCard key={i} tea={tea} />)
                }
            </div>

        </>
    );
};

export default Home;
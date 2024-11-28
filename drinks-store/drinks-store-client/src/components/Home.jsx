import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DrinksCard from './DrinksCard';

const Home = () => {

    const drinks = useLoaderData()

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-8'>Popular Drinks</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    drinks.map((drink, i) => <DrinksCard key={i} drink={drink} />)
                }
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MilkCard from './MilkCard';

const Home = () => {

    const milks = useLoaderData()
    console.log(milks)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
            {milks.map((milk, i) => <MilkCard milk={milk} key={i} />)}
        </div>
    )
}

export default Home;

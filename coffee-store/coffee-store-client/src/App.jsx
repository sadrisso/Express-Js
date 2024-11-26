
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const allCoffees = useLoaderData()
  console.log(allCoffees)

  return (
    <>
      <Navbar />
      <h1 className='text-4xl font-semibold my-10'>Your Favourite Coffees</h1>
      <p className='mb-5'>praesentium non odit veritatis reprehenderit eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, praesentium non odit veritatis reprehenderit eaque!</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          allCoffees.map((coffee) =>
            <div className="card bg-base-100 border m-3">
              <figure className="px-10 pt-10">
                <img
                  src={coffee.photo}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{coffee.name}</h2>
                <p>{coffee.details}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  )
}

export default App


// {
//   "_id": "674534283770979895179dab",
//   "name": "capacino",
//   "quantity": "2",
//   "supplier": "flipb",
//   "taste": "ok",
//   "category": "white",
//   "details": "sweety",
//   "photo": "https://i.ibb.co.com/gT9GJZd/coffee-1.jpg"
// }

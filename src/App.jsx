
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20'>
      <h1 className='text-center p-4 font-bold text-4xl text-green-800'> Total coffee : {coffees.length} </h1>
     <div className='grid md:grid-cols-2 gap-8'>
     {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees ={setCoffees} > </CoffeeCard>)
      }
     </div>
    </div>
  )
}

export default App
import { useLoaderData, useNavigate } from 'react-router-dom'
import './App.css'
import ChocolateList from './components/ChocolateList';
import { useState } from 'react';

function App() {
  const navigate = useNavigate()
  const chocolates = useLoaderData();
  const [chocolate, setChocolate] = useState(chocolates);
  console.log(chocolates)

  return (
    <div className=''>
      <h2 className='text-white bg-amber-800 text-3xl font-bold text-center p-3 w-fit mx-auto rounded-xl mb-20 mt-12'>Chocolate Management System</h2>
        <button onClick={()=>navigate('/addChocolate')} className='bg-slate-300 p-3 rounded ml-2'>+ Add New Chocolate</button>
      <div className='bg-stone-400 flex justify-between px-5 m-3'>
        <p>Image</p>
        <p>Name</p>
        <p>Country</p>
        <p>category</p>
        <p>Action</p>
      </div>
        <div>
          {
            chocolate.map(cho => <ChocolateList key={cho._id} chocolates={cho} chocolate={chocolate} setChocolate={setChocolate}></ChocolateList>)
          }
        </div>
    </div>
  )
}

export default App

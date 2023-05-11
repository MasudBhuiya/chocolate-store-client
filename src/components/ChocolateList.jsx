// import React from 'react';

import { Link } from "react-router-dom";

const ChocolateList = ({chocolates, chocolate, setChocolate}) => {
    
    // console.log(chocolate);
    

    const {_id, name, country, category, photo} = chocolates;
    const handleDelete = (_id) =>{
        console.log(_id)
        fetch(`http://localhost:5000/chocolates/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted successfully')
            const remaining = chocolate.filter(cho => cho._id !== _id);
            setChocolate(remaining)
            }
        })
    }
    return (
        <div className="bg-slate-50 bordered flex justify-between p-5 m-3">
            <img className="h-[40px]" src={photo} alt="" />
            <h1>{name}</h1>
            <h1>{country}</h1>
            <h1>{category}</h1>
            <div>
                <Link to={`/updateCho/${_id}`}><button  className="bg-stone-400 p-2 rounded mr-2">Edit</button></Link>
                <button onClick={()=>handleDelete(_id)} className="bg-stone-400 p-2 rounded">X</button>
            </div>
        </div>
    );
};

export default ChocolateList;
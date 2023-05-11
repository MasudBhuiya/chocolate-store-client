// import React from 'react';

import { useNavigate } from "react-router-dom";

const AddChocolate = () => {
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = {name, country, category, photo};
        console.log(newChocolate);
        fetch('http://localhost:5000/chocolates',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Added Successfully')
            }
        })
    }

    return (
        <div>
            <h1 className='text-white bg-amber-800 text-3xl font-bold text-center p-3 w-fit mx-auto rounded-xl mb-20 mt-12'>Chocolate Management System</h1>
            <button onClick={()=>navigate('/')} className='bg-slate-300 p-3 rounded ml-2'>All Chocolates</button>

            <form onSubmit={handleSubmit} className="bg-slate-200 p-20 w-[50%] mx-auto">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Chocolate Name</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Hot Pink Chocolate" name="name" className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Country</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Enter Country Name" name="country" className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Category</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Category" name="category" className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <input className="btn btn-block bg-amber-800 mt-5" type="submit" value='Save' name="" id="" />
            </form>
        </div>
    );
};

export default AddChocolate;
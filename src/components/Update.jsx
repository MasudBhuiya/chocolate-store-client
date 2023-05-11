// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Update = () => {
    const update = useLoaderData();
    const {name, country, category, photo, _id} = update;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = {name, country, category, photo};
        console.log(newChocolate);
        fetch(`http://localhost:5000/chocolates/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('Updated Successfully')
            }
        })
    }

    return (
        <form onSubmit={handleUpdate} className="bg-slate-200 p-20 w-[50%] mx-auto">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Chocolate Name</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Hot Pink Chocolate" name="name" defaultValue={name} className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Country</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Enter Country Name" name="country" defaultValue={country} className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Enter Photo URL" name="photo" defaultValue={photo} className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Category</span>
                    </label>
                    <label className="">
                        <input type="text" placeholder="Category" name="category" defaultValue={category} className="input input-bordered rounded w-full" />
                    </label>
                </div>
                <input className="btn btn-block bg-amber-800 mt-5" type="submit" value='Update' name="" id="" />
            </form>
    );
};

export default Update;
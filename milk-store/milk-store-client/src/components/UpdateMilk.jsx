import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMilk = () => {

    // const updateMilk = useLoaderData()
    // console.log(updateMilk)
    // const {name, description, _id} = updateMilk;

    const handleUpdate = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;

        const updatedMilk = {name, description}
        console.log(updatedMilk)
    }
    return (

        <div>
            <form className="card-body" onSubmit={handleUpdate}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="milk name" name="name" defaultValue={name} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="milk description" name="description" defaultValue={description} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>

    );
};

export default UpdateMilk;
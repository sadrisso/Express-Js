import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditUser = () => {

    const navigate = useNavigate()
    const loadedUser = useLoaderData()
    const { name, email, _id } = loadedUser;

    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedInfo = { name, email }

        fetch(`http://localhost:4000/users/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    alert("Updated")
                    navigate("/users")
                }
            })
    }

    return (
        <div className='text-center mt-52'>
            <h2 className='text-3xl font-semibold mb-10'>Update User</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form className="card-body" onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' defaultValue={name} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' defaultValue={email} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateTea = () => {

    const updateTea = useLoaderData()
    console.log(updateTea)
    const { teaName, _id, supplier, quantity, description } = updateTea;

    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.tea.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const description = form.description.value;

        const updatedInfo = { name, quantity, supplier, description }

        fetch(`http://localhost:4000/teas/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-3xl font-semibold mb-3">Update Tea</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio error suscipit similique, quod pariatur quo?</p>
            </div>
            <form className="card-body w-[500px] mx-auto border" onSubmit={handleUpdate}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tea</span>
                    </label>
                    <input type="text" placeholder="tea name" name="tea" defaultValue={teaName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" placeholder="quantity" name="quantity" defaultValue={quantity} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <input type="text" placeholder="supplier" name="supplier" defaultValue={supplier} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="description" name="description" defaultValue={description} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Tea</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTea;
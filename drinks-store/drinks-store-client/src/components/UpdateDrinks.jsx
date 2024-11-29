import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDrinks = () => {

    const updateItem = useLoaderData()
    const navigate = useNavigate()
    const { _id, drinkName, description } = updateItem;

    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;
        const drinkName = form.drinkName.value;
        const description = form.description.value;

        const updateDetails = { drinkName, description }
        console.log(updateDetails)

        fetch(`http://localhost:9000/drinks/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate("/")
            })
    }


    return (
        <div>
            <div className="text-center text-3xl font-semibold">
                <h1>Update Your Drinks</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Drinks Name</span>
                        </label>
                        <input type="text" placeholder="drinks name" name="drinkName" defaultValue={drinkName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="description here" name="description" defaultValue={description} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDrinks;
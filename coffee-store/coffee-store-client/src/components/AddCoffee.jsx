import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;

        const newCoffee = { name, quantity, supplier, taste, category, details }
        console.log(newCoffee)


        fetch("http://localhost:8000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'close'
                      })
                }
            })
    }


    return (
        <div>
            <div>
                <h1 className="text-center text-3xl font-semibold mb-3">Add New Coffee</h1>
                <p className="mx-auto text-center w-2/3">quas quo deleniti maiores illum, asperiores necessitatibus doloremque sequi, inventore possimus maxime ut aut cum praesentium debitis consectetur!</p>
            </div>
            <form className="card-body w-full md:w-[600px] mx-auto rounded-xl border border-black bg-base-200 p-5 md:p-10 mt-5 md:mt-10"
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between">
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-black">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="coffee name" name="name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Available Quantity</span>
                        </label>
                        <input type="text" placeholder="available quantity" name="quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-black">Supplier</span>
                        </label>
                        <input type="text" placeholder="supplier" name="supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Taste</span>
                        </label>
                        <input type="text" placeholder="taste" name="taste" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-black">Category</span>
                        </label>
                        <input type="text" placeholder="category" name="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Details</span>
                        </label>
                        <input type="text" placeholder="details" name="details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" name="photoUrl" className="input input-bordered w-full" />
                </div>
                <div className="form-control mt-6 w-[520px] mx-auto">
                    <button className="btn border border-black">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
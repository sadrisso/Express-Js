

const AddCoffees = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const teaName = form.tea.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const description = form.description.value;

        const teaDetails = { teaName, quantity, supplier, description }

        fetch("http://localhost:4000/teas", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(teaDetails)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-3xl font-semibold mb-3">Add Tea</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio error suscipit similique, quod pariatur quo?</p>
            </div>
            <form className="card-body w-[500px] mx-auto border" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tea</span>
                    </label>
                    <input type="text" placeholder="tea name" name="tea" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" placeholder="quantity" name="quantity" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <input type="text" placeholder="supplier" name="supplier" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="description" name="description" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Tea</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffees;
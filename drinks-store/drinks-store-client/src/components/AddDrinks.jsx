

const AddDrinks = () => {

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const drinkName = form.drinkName.value;
        const description = form.description.value;

        const drinks = { drinkName, description }
        console.log(drinks)

        fetch("http://localhost:9000/drinks", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(drinks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Drinks added successfully!")
                }
                form.reset();
            })
    }
    return (
        <div>
            <div className="text-center text-3xl font-semibold">
                <h1>Add Your Drinks</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Drinks Name</span>
                        </label>
                        <input type="text" placeholder="drinks name" name="drinkName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="description here" name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDrinks;
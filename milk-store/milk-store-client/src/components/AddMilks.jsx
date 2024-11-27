

const AddMilks = () => {


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;

        const milkInfo = { name, description }
        console.log(milkInfo)

        fetch("http://localhost:3000/milks", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(milkInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <div>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="milk name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="milk description" name="description" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddMilks;
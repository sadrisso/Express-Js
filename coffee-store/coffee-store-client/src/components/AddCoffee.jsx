

const AddCoffee = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-3xl font-semibold mb-3">Add New Coffee</h1>
                <p className="mx-auto text-center w-2/3">quas quo deleniti maiores illum, asperiores necessitatibus doloremque sequi, inventore possimus maxime ut aut cum praesentium debitis consectetur!</p>
            </div>
            <form className="card-body w-full md:w-2/3 mx-auto rounded-xl bg-slate-400 p-5 md:p-10 mt-5 md:mt-10">
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-black">Coffee Name</span>
                    </label>
                    <input type="text" placeholder="coffee name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Available Quantity</span>
                    </label>
                    <input type="text" placeholder="available quantity" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
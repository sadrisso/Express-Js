

const DrinksCard = ({ drink }) => {

    const { _id, drinkName, description } = drink;

    const handleRemove = id => {
        console.log(id)

        fetch(`http://localhost:9000/drinks/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Drinks deleted successfully")
                }
            })
    }

    return (
        <div className="mx-auto">
            <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                    <img
                        src="https://i.ibb.co.com/hdHyxTL/drinks.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{drinkName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-error" onClick={() => handleRemove(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinksCard;
import { Link } from "react-router-dom";


const TeaCard = ({ tea }) => {

    const { teaName, supplier, quantity, description, _id } = tea;
    console.log(tea)

    const handleRemove = (id) => {
        console.log(id)

        fetch(`http://localhost:4000/teas/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="card bg-base-100 border rounded-lg">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{teaName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary">Purchase</button>
                        <Link to={`/teas/${_id}`}><button className="btn btn-success">Update</button></Link>
                        <button className="btn btn-error" onClick={() => handleRemove(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeaCard;
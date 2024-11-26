import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {

    const { _id, name, details, photo } = coffee;

    const handleRemove = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card bg-base-100 border m-3">
                <figure className="px-10 pt-10">
                    <img
                        src={photo}
                        alt="Shoes"
                        className="rounded-xl h-[200px] w-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <div className="flex gap-3">
                            <button className="btn join-item rounded-full bg-blue-500 text-white"><FaEye /></button>
                            <Link to={`updateCoffee/${_id}`}><button className="btn join-item rounded-full bg-green-500 text-white"><MdEdit /></button></Link>
                            <button className="btn join-item rounded-full bg-red-500 text-white" onClick={() => handleRemove(_id)}><MdDelete /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
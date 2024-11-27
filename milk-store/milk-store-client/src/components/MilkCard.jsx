import React from 'react';

const MilkCard = ({ milk }) => {

    const { _id, name, description } = milk;

    const handleRemove = (id) => {

        fetch(`http://localhost:3000/milks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-error" onClick={() => handleRemove(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilkCard;
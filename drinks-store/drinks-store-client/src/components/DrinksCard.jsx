

const DrinksCard = ({ drink }) => {

    const { _id, drinkName, description } = drink;

    return (
        <div className="mx-auto">
            <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                    <img
                        src="https://i.ibb.co.com/hdHyxTL/drinks.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{drinkName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinksCard;
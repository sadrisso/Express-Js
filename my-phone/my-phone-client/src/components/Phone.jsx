import { useLoaderData } from "react-router-dom";


const Phone = () => {

    const phone = useLoaderData()
    console.log(phone)

    return (
        <div>
            <h2>Brand: {phone.brand}</h2>
            <p>Price: {phone.price}</p>
        </div>
    );
};

export default Phone;
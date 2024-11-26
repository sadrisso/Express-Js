import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {

    const phoneData = useLoaderData()

    console.log(phoneData)

    return (
        <div>
            <h1>Phones {phoneData.length}</h1>
            {
                phoneData.map((phone) => <Link key={phone.id} to={`/phones/${phone.id}`}><li >{phone.brand}</li></Link>)
            }
        </div>
    );
};

export default Phones;
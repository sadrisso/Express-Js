import { useLoaderData } from "react-router-dom";


const Users = () => {

    const data = useLoaderData()
    console.log(data)

    const handleRemove = (id) => {
        console.log(id)

        fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <div>
            {data.length}
            {data.map((d) => <p key={d._id}>{d.name} : {d.email} <button onClick={() => handleRemove(d._id)}>X</button></p>)}
        </div>
    );
};

export default Users;
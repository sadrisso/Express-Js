import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const data = useLoaderData()
    const [users, setUsers] = useState(data)

    const handleRemove = (id) => {
        console.log(id)

        fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully")
                    const remaining = users.filter((user) => user._id !== id);
                    setUsers(remaining)
                }
            })
    }

    return (
        <div>
            {users.length}
            {users.map((d) =>
                <p key={d._id}>{d.name} : {d.email}
                    <Link to={`/users/${d._id}`}><button>Update</button></Link>
                    <button onClick={() => handleRemove(d._id)}>X</button>
                </p>
            )}
        </div>
    );
};

export default Users;
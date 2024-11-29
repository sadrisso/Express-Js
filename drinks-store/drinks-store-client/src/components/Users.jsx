import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)

    const handleRemove = (id) => {
        console.log(id)

        fetch(`http://localhost:9000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Deleted")
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={i}>
                                    <th>1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="flex gap-2">
                                        <button className="btn btn-success">Edit</button>
                                        <button className="btn btn-error" onClick={() => handleRemove(user._id)}>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const allUsers = useLoaderData()
    const [users, setUsers] = useState(allUsers)

    const handleRemove = id => {
        fetch(`http://localhost:4000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount>0){
                    alert("successful")
                }
            })
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers)
    }

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-semibold text-center mb-10'>Registered Users</h1>
            <table className="table border">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) =>
                        <tr>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='flex gap-2'>
                                <Link to={`/users/${user._id}`}><button className='btn btn-sm'>Edit</button></Link>
                                <button className='btn btn-sm' onClick={() => handleRemove(user._id)}>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
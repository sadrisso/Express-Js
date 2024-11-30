import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Students = () => {

    const loadedStudents = useLoaderData()

    const handleRemove = id => {
        fetch(`http://localhost:2000/students/${id}`, {
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
            <h1 className='text-3xl font-semibold text-center my-5'>Registered Students</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>_id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            loadedStudents.map((student, i) =>
                                <tr key={i}>
                                    <th></th>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student._id}</td>
                                    <td className='flex gap-2'>
                                        <button className='btn btn-accent'>Edit</button>
                                        <button className='btn btn-error' onClick={() => handleRemove(student._id)}>Delete</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Students;
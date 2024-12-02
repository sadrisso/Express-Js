import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Students = () => {

    const loadedStudents = useLoaderData()
    const [students, setStudents] = useState(loadedStudents)

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
                const remaining = students.map((student) => student._id !== id);
                setStudents(remaining)
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
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>_id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            students.map((student, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student._id}</td>
                                    <td className='flex gap-2'>
                                        <Link to={`/students/${student._id}`}><button className='btn btn-accent'>Edit</button></Link>
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
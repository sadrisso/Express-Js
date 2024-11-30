import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Students = () => {

    const loadedStudents = useLoaderData()

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
                                        <button className='btn btn-error'>Delete</button>
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
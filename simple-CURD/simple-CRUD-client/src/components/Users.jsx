import { useLoaderData } from "react-router-dom";


const Users = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            {data.length}
            {data.map((d) => <p key={d._id}>{d.name} : {d.email}</p>)}
        </div>
    );
};

export default Users;
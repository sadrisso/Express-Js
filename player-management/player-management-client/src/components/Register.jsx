import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegisterUser = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const registerInfo = { name, email, password }

        createUser(email, password)
            .then((res) => {
                console.log("Registered User : ", res.user)
                updateUser({ displayName: name })
                    .then(() => {
                        console.log("Profile Updated")
                        navigate("/")
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => {
                console.log("Error : ", err)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleRegisterUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-xs my-3">Already have a accout? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
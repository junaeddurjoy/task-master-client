/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { Authcontext } from "../providers/AuthProvider";

const Registration = () => {
    const { createUser } = useContext(Authcontext);
    const [regError, setregError] = useState('');
    const [regSuccess, setregSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const displayName = form.get('username');
        const email = form.get('email');
        const password = form.get('password');
        const photoURL = form.get('profile_image')
        setregError('')
        setregSuccess('')

        if (password.length < 6) {
            setregError('Password should be at least 6 characters.')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setregError('Password should contain at least 1 upper case letter.')
            return;
        }
        else if (!/[^A-Za-z0-9]/.test(password)) {
            setregError('Password should contain at least 1 special character.')
            return;
        }

        createUser(email, password, displayName, photoURL)
            .then(result => {
                setregSuccess("User Created")
                const auth = getAuth();
                updateProfile(auth.currentUser, {
                    displayName: displayName, photoURL: photoURL
                }).then(() => {
                    navigate(location?.state ? location.state : '/')

                }).catch((error) => {
                    // console.log(error);
                });
                console.log("ggggggggggggggggggggg", result.user)

            })
            .catch(error => {
                console.error(error)
                setregError(error.message);
            })
    }

    return (
        <div>
            <h1 className="text-5xl font-bold -mb-20 mt-20 text-center">Sign Up Now!</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 p-10">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='username' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Image</span>
                                </label>
                                <input type="text" placeholder="url" name="profile_image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/login'}>
                                        <a href="#" className="label-text-alt link link-hover text-md font-semibold hover:text-xl">Already Registered?</a>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control  mt-3">
                                <button className="btn bg-black text-white hover:text-black ">Register</button>
                            </div>
                        </form>
                        {
                            regError && <p className='text-red-700'>{regError}</p>
                        }
                        {
                            regSuccess && <p className='text-green-700'>{regSuccess}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
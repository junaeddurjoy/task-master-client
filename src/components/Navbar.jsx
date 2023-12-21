/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Authcontext } from "../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, logout } = useContext(Authcontext);
    const handleSignOut = event => {
        logout()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to={'/'}>
                        <a className="btn btn-ghost text-2xl">Task Master</a>
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div className="flex gap-4 font-semibold text-xl">
                            {
                                user ?
                                    <Link to={'/dashboard'}>
                                        <h2 className="hover:bg-base-300 p-3 rounded-lg">Dashboard</h2>
                                    </Link>
                                    :
                                    <></>
                            }
                            <Link to={'/ongoing'}>
                                <h2 className="hover:bg-base-300 p-3 rounded-lg">Ongoing</h2>
                            </Link>
                            <Link to={'/completed'}>
                                <h2 className="hover:bg-base-300 p-3 rounded-lg">Completed</h2>
                            </Link>
                            <Link to={'/addtask'}>
                                <h2 className="hover:bg-base-300 p-3 rounded-lg">Add Task</h2>
                            </Link>
                            <Link to={'/todo'}>
                                <h2 className="hover:bg-base-300 p-3 rounded-lg">To Do</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end flex items-center gap-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user ?
                                        <img alt="" src={user?.photoURL} />
                                        :
                                        <img alt="" src='https://johannesippen.com/img/blog/humans-not-users/header.jpg' />
                                }
                            </div>
                        </div>
                        <div>
                            {
                                user ?
                                    <Link to={'/login'}>
                                        <button onClick={handleSignOut} className="btn btn-active btn-neutral">Log Out</button>
                                    </Link>
                                    :
                                    <Link to={'/login'}>
                                        <button className="btn btn-active btn-neutral">Log In</button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Link } from "react-router-dom";

const Navbar = () => {
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
                            <Link to={'/dashboard'}>
                                <h2 className="hover:bg-base-300 p-3 rounded-lg">Dashboard</h2>
                            </Link>
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
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-active btn-neutral">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
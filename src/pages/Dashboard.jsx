import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Authcontext } from "../providers/AuthProvider";
const Dashboard = () => {
    const { user } = useContext(Authcontext);
    const [task, setTask] = useState([]);
    useEffect(() => {
        fetch('https://task-master-server-six.vercel.app/task')
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])


    const [tasks, setTasks] = useState([]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-master-server-six.vercel.app/task/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = tasks.filter(taks => taks._id !== id);
                            setTasks(remaining);
                            // location.reload();
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead className="bg-red-200">
                        <tr className="text-2xl">
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            task.map(tasks =>
                                <tr key={tasks._id}>
                                    {
                                        tasks.email == user?.email &&
                                        <>
                                            <th>{tasks.title}</th>
                                            <td>{tasks.description}</td>
                                            <td>{tasks.deadline}</td>
                                            <td>{tasks.priority}</td>
                                            <td>{tasks.status}</td>
                                            <td><div className="join">
                                                <Link to={`/updatetask/${tasks._id}`}>
                                                    <button className="btn  text-xl font-semibold bg-purple-200">Update</button>
                                                </Link>
                                                <button onClick={() => handleDelete(task._id)} className="btn  text-xl font-semibold bg-red-500">Delete</button>

                                            </div></td>
                                        </>
                                    }
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
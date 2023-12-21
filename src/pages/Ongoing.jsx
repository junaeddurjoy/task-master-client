import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../providers/AuthProvider";
const Ongoing = () => {
    const { user } = useContext(Authcontext);
    const [task, setTask] = useState([]);
    useEffect(() => {
        fetch('https://task-master-server-six.vercel.app/task')
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            task.map(tasks =>
                                <tr key={tasks._id}>
                                    {
                                        (tasks.status == "ongoing" && tasks.email==user?.email) &&
                                        <>
                                            <th>{tasks.title}</th>
                                            <td>{tasks.description}</td>
                                            <td>{tasks.deadline}</td>
                                            <td>{tasks.priority}</td>
                                            <td>{tasks.status}</td>
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

export default Ongoing;
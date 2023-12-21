import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";

const Updatetask = () => {
    const dbTask = useLoaderData();
    const { _id, title, description, deadline, priority, email, status } = dbTask;
    const handleUpdateTask = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const email = form.email.value;
        const status = form.status.value;
        const updatedApply = { title, description, deadline, priority, email, status };
        console.log(updatedApply)
        fetch(`https://task-master-server-six.vercel.app/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedApply)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    console.log('updated');
                }
            })

    }
    return (
        <div className="w-2/4 mx-auto">
            <h1 className="text-center font-semibold text-6xl text-red-800 my-6">Update Your To Do List</h1>
            <form onSubmit={handleUpdateTask}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5 border-red-100 border-2">
                    {/* 1 */}
                    <div className="form-control  items-center">
                        <label className="label ">
                            <span className="label-text font-bold text-xl">Task Title</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Title</span>
                            <input type="text" name="title" defaultValue={title} placeholder="task title" className="input input-bordered" />
                        </label>
                    </div>
                    {/* 5 */}
                    <div className="form-control  items-center">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Description</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Description</span>
                            <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered" />
                        </label>
                    </div>

                    {/* 7 */}
                    <div className="form-control  items-center">
                        <label className="label ">
                            <span className="label-text font-bold text-xl">Deadline</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Date</span>
                            <input type="date" name="deadline" defaultValue={deadline} placeholder="date" className="input input-bordered" />
                        </label>
                    </div>
                    {/* 8 */}
                    <div className="form-control  items-center">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Priority</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Rating</span>
                            <input type="number" name="priority" defaultValue={priority} placeholder="priority rating" className="input input-bordered" />
                        </label>

                    </div>
                    <div className="form-control  items-center">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Status</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Status</span>
                            <select name="status" defaultValue={status} className="input input-bordered">
                                <option name="pending" id="">pending</option>
                                <option name="ongoing" id="">ongoing</option>
                                <option name="completed" id="">completed</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control  items-center">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Email</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Email</span>
                            <input type="text" name="email" defaultValue={email} placeholder="email" className="input input-bordered" />
                        </label>

                    </div>
                </div>

                <div className="p-5 text-center">
                    <button type="submit" className="btn btn-wide justify-center bg-red-400 hover:bg-red-300 font-bold">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Updatetask;
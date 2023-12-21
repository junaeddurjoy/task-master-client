import { useContext } from "react";
import { Authcontext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'

const AddTask = () => {
    const { user } = useContext(Authcontext);
    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const email = user?.email;
        const status = 'pending'
        const newTask = {title,description,deadline,priority,email,status};
        fetch('https://task-master-server-six.vercel.app/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    console.log('added');
                }
            })

    }
    return (
        <div className="w-2/4 mx-auto">
            <h1 className="text-center font-semibold text-6xl text-red-800 my-6">Add Your To Do List</h1>
            <form onSubmit={handleAddTask}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5 border-red-100 border-2">
                    {/* 1 */}
                    <div className="form-control  items-center">
                        <label className="label ">
                            <span className="label-text font-bold text-xl">Task Title</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Title</span>
                            <input type="text" name="title" placeholder="task title" className="input input-bordered" />
                        </label>
                    </div>
                    {/* 5 */}
                    <div className="form-control  items-center">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Description</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Description</span>
                            <input type="text" name="description" placeholder="description" className="input input-bordered" />
                        </label>
                    </div>

                    {/* 7 */}
                    <div className="form-control  items-center">
                        <label className="label ">
                            <span className="label-text font-bold text-xl">Deadline</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Date</span>
                            <input type="date" name="deadline" placeholder="date" className="input input-bordered" />
                        </label>
                    </div>
                    {/* 8 */}
                    <div className="form-control  items-center">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Priority</span>
                        </label>
                        <label className="input-group justify-center">
                            <span className="mr-3">Rating</span>
                            <input type="number" name="priority" placeholder="priority rating" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                    
                <div className="p-5 text-center">
                    <button type="submit" className="btn btn-wide justify-center bg-red-400 hover:bg-red-300 font-bold">Add To Do</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
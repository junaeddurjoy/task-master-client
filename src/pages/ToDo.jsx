const ToDo = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
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
                        <tr>
                            <th>Title</th>
                            <td>Description</td>
                            <td>Deadline</td>
                            <td>Priority</td>
                            <td>Status</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDo;
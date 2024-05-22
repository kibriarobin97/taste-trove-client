import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user?._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch()
                toast.success(`${user?.name} is an admin now!`)
            }
        })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mx-10">
            <SectionTitle subHeading={'How many??'} heading={'MANAGE ALL USERS'}></SectionTitle>
            <div className="text-center flex justify-evenly items-center">
                <h2 className="lg:text-2xl text-xl font-semibold">Total User: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th><p className="text-white">#</p></th>
                                <th><p className="uppercase text-white">Name</p></th>
                                <th><p className="uppercase text-white">Email</p></th>
                                <th><p className="uppercase text-white">Role</p></th>
                                <th><p className="uppercase text-white">Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        {user?.name}
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                            <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn bg-[#D1A054] btn-sm"><FaUsers className="text-2xl text-white" />
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn bg-[#B91C1C] btn-sm"><MdDeleteForever className="text-2xl text-white" />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
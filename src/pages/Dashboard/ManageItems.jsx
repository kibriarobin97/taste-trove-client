import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item?.name} has been deleted`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Manage-Item | Taste-Trove</title>
            </Helmet>
            <SectionTitle subHeading={'Hurry Up!'} heading={'MANAGE ALL ITEMS'}></SectionTitle>
            <div className="text-center flex justify-evenly items-center">
                <h2 className="lg:text-2xl text-xl font-semibold">Total Items: {menu.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th><p className="text-white">#</p></th>
                                <th><p className="uppercase text-white">Item Image</p></th>
                                <th><p className="uppercase text-white">Item Name</p></th>
                                <th><p className="uppercase text-white">price</p></th>
                                <th><p className="uppercase text-white">Action</p></th>
                                <th><p className="uppercase text-white">Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask rounded-full w-12 h-12">
                                                    <img src={item?.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>${item?.price}</td>
                                    <td>
                                        <Link to={`/dashboard/update-item/${item?._id}`}>
                                            <button
                                                className="btn bg-[#D1A054] btn-sm"><FaRegEdit className="text-xl text-white text-center" />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn bg-[#B91C1C] btn-sm"><MdDeleteForever className="text-2xl text-white" /></button>
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

export default ManageItems;
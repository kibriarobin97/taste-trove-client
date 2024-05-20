import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {

    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
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
                axiosSecure.delete(`/carts/${id}`)
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
            <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></SectionTitle>
            <div className="text-center flex justify-evenly items-center">
                <h2 className="text-2xl font-semibold">Total Order: {cart.length}</h2>
                <h2 className="text-2xl font-semibold">Total Price: {totalPrice}</h2>
                <button className="btn bg-[#D1A054] font-semibold text-white">PAY</button>
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
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, idx) => <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
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
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn bg-[#B91C1C] btn-sm"><MdDeleteForever className="text-2xl text-white" /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
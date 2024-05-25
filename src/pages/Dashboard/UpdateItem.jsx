import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const item = useLoaderData()
    console.log(item)

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data?.data?.display_url)
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data?.data?.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${item?._id}`, menuItem)
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount) {
                // reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    color: "#B58130",
                    title: `${item?.name} Updated Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div className="min-h-[calc(100vh-276px)]">
            <Helmet>
                <title>Update-Item | Taste-Trove</title>
            </Helmet>
            <SectionTitle heading={'UPDATE ITEM'} subHeading={'Something New?'}></SectionTitle>
            <section className="px-6 pb-10 text-black">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-5xl flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 w-full mx-auto gap-6 p-6 rounded-md shadow-sm bg-[#F3F3F3]">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3s">
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm font-semibold">Recipe Name</label>
                                <input {...register("name", { required: true })}
                                    type="text"
                                    defaultValue={item?.name}
                                    placeholder="Recipe name"
                                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm font-semibold">Category</label>
                                <select defaultValue={item?.category} {...register("category", { required: true })} type="text" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700">
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm font-semibold">Price</label>
                                <input {...register("price", { required: true })} 
                                defaultValue={item?.price}
                                type="number" placeholder="Price" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm font-semibold">Recipe Details</label>
                                <textarea {...register("recipe", { required: true })}
                                    type="text"
                                    defaultValue={item?.recipe}
                                    placeholder="Recipe Details" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"></textarea>
                            </div>
                            <div className="col-span-full">
                                <input
                                    {...register("image", { required: true })}
                                    type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                            </div>
                            <div className="col-span-full">
                                <button type="submit" className="btn text-white font-bold bg-gradient-to-r from-[#835D23] to-[#B58130] cursor-pointer flex items-center gap-1">
                                    Update Item
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default UpdateItem;
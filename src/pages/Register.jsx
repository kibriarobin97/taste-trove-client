import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/others/authentication1.png"
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import GoogleLogin from "../SocialLogin/GoogleLogin";



const Register = () => {

    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 2000
                                    });
                                }
                            })

                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Helmet>
                <title>Register | Taste Trove</title>
            </Helmet>
            <div className="min-h-[calc(100vh-276px)] max-w-7xl mx-auto lg:flex justify-center items-center gap-10 md:min-h-screen">
                <div className="lg:w-1/2 w-full max-w-md px-8 space-y-3 rounded-xl text-black">
                    <h1 className="text-2xl font-bold text-center">Please Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-500 font-medium">Name</label>
                            <input type="text" name="name" {...register("name", { required: true })} id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-600 focus:border-violet-400" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-500 font-medium">Photo</label>
                            <input type="text" name="photo" {...register("photo", { required: true })} id="username" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-600 focus:border-violet-400" />
                            {errors.photo && <span className="text-red-500">Photo URL is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-500 font-medium">Email</label>
                            <input type="email" name="email" {...register("email", { required: true })} id="" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-600 focus:border-violet-400" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-500 font-medium">Password</label>
                            <input type="password" name="password" {...register("password",
                                {
                                    required: true,
                                    maxLength: 10,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-600 focus:border-violet-400" />
                            {errors.password?.type === "required" && (<p className="text-red-500">Password is required</p>)}
                            {errors.password?.type === "minLength" && (<p className="text-red-500">Password must be 6 characters</p>)}
                            {errors.password?.type === "maxLength" && (<p className="text-red-500">Password must be less than 10 characters</p>)}
                            {errors.password?.type === "pattern" && (<p className="text-red-500">Password must have one uppercase, one lowercase, one number and one special character</p>)}
                        </div>
                        <input className="block w-full btn cursor-pointer p-3 text-center font-bold rounded-sm text-white bg-[#BB8506]" type="submit" value="Register" />
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-500 font-medium">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <GoogleLogin></GoogleLogin>
                        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                            </svg>
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 text-gray-500">Already have an account?
                        <Link to='/login' className="underline text-gray-700 font-medium"> Login</Link>
                    </p>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Register;
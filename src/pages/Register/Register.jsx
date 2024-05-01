import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import useAuth from "../../Hook/useAuth";


const Register = () => {

    const {createUser, logOut} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const onSubmit = async (data) => {
        const { fullName, PhotoURL, email, password } = data;
        console.log(data);
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthRegex = /.{6,}/;

        if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !lengthRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        try {
            await createUser(email, password, fullName, PhotoURL)
            .then(result => {
                console.log(result.user);
                const createdAt = result.user?.metadata.creationTime;
                const user = {email, createdAt: createdAt};
                fetch('http://localhost:3000/user',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(user),
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            })
            logOut();
            toast.success(
                <>
                    Registration successful <br /> Login with your Credentials
                </>, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                onClose: () => navigate('/'),
            });
        } catch (error) {
            console.error(error);
            toast.error('Registration failed', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Register Now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    name="fullName"
                                    className="input input-bordered"
                                    {...register("fullName", { required: true })}
                                />
                                {errors.fullName && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    name="PhotoURL"
                                    className="input input-bordered"
                                    {...register("PhotoURL", { required: true })}
                                />
                                {errors.PhotoURL && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                <span className="absolute top-[50px] right-3 cursor-pointer" onClick={() =>
                                    setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEye /> : <FaEyeSlash />
                                    }
                                </span>
                                {errors.password && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#2CCCD3]">Register</button>
                            </div>
                        </form>
                    </div>
                    <p>Already Registered? Go To{' '}
                        <Link className="text-blue-600 underline" to="/login">
                            LogIn Page
                        </Link>
                    </p>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;
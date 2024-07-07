// // // import React from 'react'
// // // import { useState } from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // import { useForm } from 'react-hook-form';

// // // function FeedBack() {

// // //     let navigate = useNavigate();
// // //     const {
// // //         register,
// // //         handleSubmit,
// // //         formState: { errors },
// // //     } = useForm()


// // //     // const [credentials, setcredentials] = useState({ itemname: "", review: "" })
// // //     //handleSubmit
// // //     const onSubmit = async (data) => {
// // //         // e.preventDefault();
// // //         //console.log(JSON.stringify({ itemname: data.itemname, review: data.review }))
// // //         const response = await fetch("http://localhost:5000/api/add_feedback",
// // //             {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json'
// // //                 }
// // //                 ,
// // //                 body: JSON.stringify({ itemname: data.itemname, review: data.review })
// // //             });


// // //         const json = await response.json();
// // //         console.log(json);

// // //         if (!json.success) {
// // //             alert("entered data must me more than 5 characters");
// // //         }
// // //         if (json.success) {
// // //             navigate("/");
// // //         }


// // //     }



// // //     return (

// // //         <div className='h-screen max-w-md mx-auto flex items-center justify-center '>
// // //             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
// // //                 <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
// // //                     <div className="form-control">






// // //                         <label className="label">
// // //                             <span className="label-text">Item Name</span>
// // //                         </label>
// // //                         <input type="text" {...register("itemname")} placeholder="Your name" className="input input-bordered" required />




// // //                         <label className="label">
// // //                             <span className="label-text">Review </span>
// // //                         </label>
// // //                         <input type="text" {...register("review")} placeholder="Your name" className="input input-bordered" required />


// // //                     </div>




// // //                     <div className="form-control mt-6">
// // //                         <input type='submit' value={"Update"} className="btn bg-green text-white" />
// // //                     </div>



// // //                 </form>


// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default FeedBack








// // // // import { useForm } from "react-hook-form";
// // // // import useAxiosPublic from "../../hooks/useAxiosPublic";
// // // // import useAxiosSecure from "../../hooks/useAxiosSecure";

// // // // import React, { useContext, useState } from "react";




// // // // const FeedBack = () => {
// // // //     const { register, handleSubmit, reset } = useForm();
// // // //     const axiosPublic = useAxiosPublic();
// // // //     const axiosSecure = useAxiosSecure();




// // // //     const {

// // // //         formState: { errors },
// // // //     } = useForm();

// // // //     // on submit form
// // // //     const onSubmit = async (data) => {
// // // //         console.log(data);
// // // //         // //image upload to imgbb and then get an url
// // // //         // const imageFile = { image: data.image[0] };
// // // //         // const hostingImg = await axiosPublic.post({
// // // //         //     headers: {
// // // //         //         "content-type": "multipart/form-data",
// // // //         //     },
// // // //         // });

// // // //         // console.log(hostingImg.data);

// // // //         // if (hostingImg.data.success) {
// // // //         //     //now send the menu item data to the server with the image url
// // // //         //     const menuItem = {
// // // //         //         itemname: data.itemname,
// // // //         //         // category: data.category,
// // // //         //         // price: parseFloat(data.price),
// // // //         //         review: data.review,
// // // //         //         // image: hostingImg.data.data.display_url
// // // //         //     }
// // // //         //     //


// // // //         const userInfo = {
// // // //             itemname: data.itemname,
// // // //             // category: data.category,
// // // //             // price: parseFloat(data.price),
// // // //             review: data.review,
// // // //             // image: hostingImg.data.data.display_url
// // // //         }

// // // //         axiosPublic.post('/put_feedback', userInfo)
// // // //             .then(res => {
// // // //                 console.log(res.data);
// // // //                 navigate('/');
// // // //             })


// // // //         // const menuRes = await axiosSecure.post('/put_feedback', menuItem);
// // // //         // console.log(menuRes)
// // // //         // if (menuRes.status === 200) {
// // // //         //     // show success popup
// // // //         //     reset();
// // // //         //     Swal.fire({
// // // //         //         position: "top-end",
// // // //         //         icon: "success",
// // // //         //         title: `${data.itemname} is added to the feedback.`,
// // // //         //         showConfirmButton: false,
// // // //         //         timer: 1500
// // // //         //     });
// // // //         //     //}
// // // //         // }

// // // //     };

// // // //     return (
// // // //         <div className="w-full md:w-[870px] mx-auto px-4">
// // // //             <h2 className="text-2xl font-semibold my-4">
// // // //                 Upload A New <span className="text-green">Menu Item</span>
// // // //             </h2>
// // // //             <div>
// // // //                 <form onSubmit={handleSubmit(onSubmit)}>
// // // //                     <div className="form-control w-full my-6">
// // // //                         <label className="label">
// // // //                             <span className="label-text">Recipe Name*</span>
// // // //                         </label>
// // // //                         <input
// // // //                             type="text"
// // // //                             placeholder="Recipe Name"
// // // //                             {...register("itemname", { required: true })}
// // // //                             required
// // // //                             className="input input-bordered w-full"
// // // //                         />

// // // //                         <label className="label">
// // // //                             <span className="label-text">Recipe Name*</span>
// // // //                         </label>
// // // //                         <input
// // // //                             type="text"
// // // //                             placeholder="Review description"
// // // //                             {...register("review", { required: true })}
// // // //                             required
// // // //                             className="input input-bordered w-full"
// // // //                         />
// // // //                     </div>
// // // //                     <div className="flex gap-6">
// // // //                         {/* category */}
// // // //                         {/* <div className="form-control w-full my-6">
// // // //                             <label className="label">
// // // //                                 <span className="label-text">Category*</span>
// // // //                             </label>
// // // //                             <select
// // // //                                 defaultValue="default"
// // // //                                 {...register("category", { required: true })}
// // // //                                 className="select select-bordered w-full"
// // // //                             >
// // // //                                 <option disabled value="default">
// // // //                                     Select a category
// // // //                                 </option>
// // // //                                 <option value="salad">Salad</option>
// // // //                                 <option value="pizza">Pizza</option>
// // // //                                 <option value="soup">Soup</option>
// // // //                                 <option value="dessert">Dessert</option>
// // // //                                 <option value="drinks">Drinks</option>
// // // //                                 <option value="popular">popular</option>
// // // //                             </select>
// // // //                         </div> */}

// // // //                         {/* review*/}
// // // //                         {/* <div className="form-control w-full my-6">
// // // //                             <label className="label">
// // // //                                 <span className="label-text">Review*</span>
// // // //                             </label>
// // // //                             <input
// // // //                                 type="number"
// // // //                                 placeholder="Price"
// // // //                                 {...register("review", { required: true })}
// // // //                                 className="input input-bordered w-full"
// // // //                             />
// // // //                         </div> */}
// // // //                     </div>
// // // //                     {/* recipe details */}
// // // //                     {/* <div className="form-control">
// // // //                         <label className="label">
// // // //                             <span className="label-text">Recipe Details</span>
// // // //                         </label>
// // // //                         <textarea
// // // //                             {...register("recipe")}
// // // //                             className="textarea textarea-bordered h-24"
// // // //                             placeholder="Bio"
// // // //                         ></textarea>
// // // //                     </div> */}

// // // //                     {/* <div className="form-control w-full my-6">
// // // //                         <input
// // // //                             {...register("image", { required: true })}
// // // //                             type="file"
// // // //                             className="file-input w-full max-w-xs"
// // // //                         />
// // // //                     </div> */}

// // // //                     <button className="btn bg-green text-white px-6">
// // // //                         Add Feedback
// // // //                     </button>
// // // //                 </form>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default FeedBack;

// // // add menu



// // // import { useForm } from "react-hook-form";
// // // import { FaUtensils } from "react-icons/fa";
// // // import useAxiosPublic from "../../hooks/useAxiosPublic";
// // // import useAxiosSecure from "../../hooks/useAxiosSecure";
// // // import Swal from "sweetalert2";

// // // const FeedBack = () => {
// // //     const { register, handleSubmit, reset } = useForm();
// // //     const axiosPublic = useAxiosPublic();
// // //     const axiosSecure = useAxiosSecure();

// // //     // image hosting keys
// // //     const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// // //     const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// // //     // on submit form
// // //     const onSubmit = async (data) => {
// // //         // console.log(data);
// // //         // image upload to imgbb and then get an url
// // //         console.log(data.image[0])
// // //         // const imageFile = { image: data.image[0] };
// // //         // console.log(imageFile)
// // //         const imageFile = "https://www.bing.com/ck/a?!&&p=5297da496274034aJmltdHM9MTcxNDUyMTYwMCZpZ3VpZD0yYzNmZjVmNi1hNTc3LTZmZGQtMWZjMy1lNmEwYTRjNTZlZDcmaW5zaWQ9NTQ5NQ&ptn=3&ver=2&hsh=3&fclid=2c3ff5f6-a577-6fdd-1fc3-e6a0a4c56ed7&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZXMmaWQ9RDA1QTU0MTFFQTY0QjRDNUNDOTc0MjU4QkE1MDUyQzU2ODkwODkyNSZGT1JNPUlRRlJCQQ&ntb=1"
// // //         console.log(imageFile[0]);
// // //         const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
// // //             headers: {
// // //                 "content-type": "multipart/form-data",
// // //             },
// // //         });

// // //         // console.log(hostingImg.data);

// // //         if (hostingImg.data.success) {
// // //             // now send the menu item data to the server with the image url
// // //             const menuItem = {
// // //                 name: data.name,

// // //                 recipe: data.recipe,
// // //                 //   image: hostingImg.data.data.display_url//
// // //                 image: "https://i.ibb.co/Q93cLsk/nature.jpg"
// // //             }
// // //             //
// // //             const menuRes = await axiosSecure.post('/fee', menuItem);
// // //             console.log(menuRes)
// // //             if (menuRes.status === 200) {
// // //                 // show success popup
// // //                 reset();
// // //                 Swal.fire({
// // //                     position: "top-end",
// // //                     icon: "success",
// // //                     title: `${data.name} is added to the menu.`,
// // //                     showConfirmButton: false,
// // //                     timer: 1500
// // //                 });
// // //             }
// // //         }

// // //     };

// // //     return (
// // //         <div className="w-full md:w-[870px] mx-auto px-4">
// // //             <h2 className="text-2xl font-semibold my-4">
// // //                 Upload A New <span className="text-green">Menu Item</span>
// // //             </h2>
// // //             <div>
// // //                 <form onSubmit={handleSubmit(onSubmit)}>
// // //                     <div className="form-control w-full my-6">
// // //                         <label className="label">
// // //                             <span className="label-text">Recipe Name*</span>
// // //                         </label>
// // //                         <input
// // //                             type="text"
// // //                             placeholder="Recipe Name"
// // //                             {...register("name", { required: true })}
// // //                             required
// // //                             className="input input-bordered w-full"
// // //                         />
// // //                     </div>
// // //                     <div className="flex gap-6">
// // //                         {/* category
// // //                         <div className="form-control w-full my-6">
// // //                             <label className="label">
// // //                                 <span className="label-text">Category*</span>
// // //                             </label>
// // //                             <select
// // //                                 defaultValue="default"
// // //                                 {...register("category", { required: true })}
// // //                                 className="select select-bordered w-full"
// // //                             >
// // //                                 <option disabled value="default">
// // //                                     Select a category
// // //                                 </option>
// // //                                 <option value="salad">Salad</option>
// // //                                 <option value="pizza">Pizza</option>
// // //                                 <option value="soup">Soup</option>
// // //                                 <option value="dessert">Dessert</option>
// // //                                 <option value="drinks">Drinks</option>
// // //                                 <option value="popular">popular</option>
// // //                             </select>
// // //                         </div>

// // //                         {/* price */}
// // //                         {/* <div className="form-control w-full my-6">
// // //                             <label className="label">
// // //                                 <span className="label-text">Price*</span>
// // //                             </label>
// // //                             <input
// // //                                 type="number"
// // //                                 placeholder="Price"
// // //                                 {...register("price", { required: true })}
// // //                                 className="input input-bordered w-full"
// // //                             />
// // //                         </div> */}
// // //                     </div>
// // //                     {/* recipe details */}
// // //                     <div className="form-control">
// // //                         <label className="label">
// // //                             <span className="label-text">Recipe Details</span>
// // //                         </label>
// // //                         <textarea
// // //                             {...register("recipe")}
// // //                             className="textarea textarea-bordered h-24"
// // //                             placeholder="Bio"
// // //                         ></textarea>
// // //                     </div>

// // //                     <div className="form-control w-full my-6">
// // //                         <input
// // //                             {...register("image", { required: true })}
// // //                             type="file"
// // //                             className="file-input w-full max-w-xs"
// // //                         />
// // //                     </div>

// // //                     <button className="btn bg-green text-white px-6">
// // //                         Add Item <FaUtensils></FaUtensils>
// // //                     </button>
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default FeedBack;




// import React, { useState } from 'react'
// import profile from '../../assets/feedback.jpg'
// import { useNavigate } from 'react-router-dom'
// import { toast, ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
// //import axios from 'axios'

// const FeedBack = () => {
//     // const [image, setImage] = useState({})

//     const [uploading, setUploading] = useState(false)


//     let navigate = useNavigate();


//     const [details, setdetails] = useState({ name: "", email: "", })

//     const handleOnSubmit = async (e) => {
//         e.preventDefault()
//         const response = await fetch("http://localhost:5000/api/register", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name: details.name, email: details.email })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.success) {
//                     // localStorage.setItem("token", data.data.token),
//                     toast.success(data.message);
//                     setDetails({ name: "", email: "" }); // Clear form state

//                     //  navigate('/')
//                     from.reset()


//                 }
//                 else {

//                     toast.error(data.message)
//                 }

//             })


//     }

//     const onChange = (event) => {
//         setdetails({ ...details, [event.target.name]: event.target.value });
//     }







//     return (
//         <div className='register'>
//             <div className="w-full mx-auto pt-[16vh]">
//                 <form className="ease-in duration-300 w-[80%]
//                  sm:w-max shadow-sm backdrop-blur-md bg-white/80
//                   lg:w-max mx-auto  rounded-md px-8 py-5 border-blue-500 border-2 border-width: 2px" onSubmit={handleOnSubmit}>

//                     <label htmlFor="file-upload" className='custom-file-upload'>
//                         <img src={profile} alt="" className='h-32  w-32 bg-contain rounded-full mx-auto cursor-pointer ' />


//                     </label>


//                     {/*name */}
//                     <div className="mb-3">
//                         <label htmlFor="name" className="block text-gray-700 text-sm mb-2 ">
//                             Recipe Name
//                         </label>
//                         <input type="text" name="name" value={details.name} placeholder="Enter Recipe Name here" onChange={onChange}
//                             className="shadow-sm bg-white appearance-none border rounded w-full py-2
//                          px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="block text-gray-700 text-sm mb-2 ">
//                             Review
//                         </label>
//                         <input type="text" name="email" placeholder='Enter Your Review Here' value={details.email} onChange={onChange}
//                             className="shadow-sm bg-white appearance-none border rounded w-full 
//                          py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                     </div>






//                     <button className="btn bg-green text-white px-6">
//                         Add FeedBack
//                     </button>





//                     <ToastContainer />


//                 </form>
//             </div>

//         </div>
//     )
// }

// export default FeedBack;
import React, { useState } from 'react';
import profile from '../../assets/feedback.jpg';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FeedBack = () => {
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();
    const [details, setDetails] = useState({ name: "", email: "" });

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: details.name, email: details.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);

                    // Reset form after successful submission
                    setDetails({ name: "", email: "" }); // Clear form state
                } else {
                    toast.error(data.message);
                }
            });
    };

    const onChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    };

    return (
        <div className='register'>
            <div className="w-full mx-auto pt-[16vh]">
                <form className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5 border-blue-500 border-2 border-width: 2px" onSubmit={handleOnSubmit}>

                    <label htmlFor="file-upload" className='custom-file-upload'>
                        <img src={profile} alt="" className='h-32  w-32 bg-contain rounded-full mx-auto cursor-pointer ' />
                    </label>

                    {/* Name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="block text-gray-700 text-sm mb-2 ">
                            Recipe Name :
                        </label>
                        <input type="text" name="name" value={details.name} placeholder="Enter Recipe Name here" onChange={onChange}
                            className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-gray-700 text-sm mb-2 ">
                            Feedback :
                        </label>

                        <textarea type="text" name="email" placeholder='Enter Your Review Here' value={details.email} onChange={onChange}
                            className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <button className="btn bg-green text-white px-6">
                        Add Feedback
                    </button>

                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default FeedBack;

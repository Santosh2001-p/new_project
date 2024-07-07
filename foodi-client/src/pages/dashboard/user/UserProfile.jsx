import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'
import { useForm } from 'react-hook-form';


import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {

  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: "", mobile: "", pincode: "", village: "", land: "", plat: "" });


  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/address", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user?.email, mobile: details.name, pincode: details.pin, village: details.vvv, land: details.lll, plat: details.ppp })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast.success(data.message);

          // Reset form after successful submission
          //setDetails({ name: "", email: "" }); // Clear form state
        } else {
          toast.error(data.message);
        }
      });
  };

  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };





  const { updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { user } = useContext(AuthContext);


  const onSubmit = (data) => {

    //old code
    // const name = data.name;
    // const photoURL = data.photoURL;

    // updateUserProfile(name, photoURL).then(() => {
    //   // Profile updated!
    //   alert("Profile updated successfully")
    // }).catch((error) => {
    //   // An error occurred
    //   // ...
    // });

    //new code
    const name = data.name;
    //  const photoURL = data.photoURL;

    updateUserProfile(name).then(() => {
      // Profile updated!
      alert("Profile updated successfully")
    }).catch((error) => {
      // An error occurred
      // ...
    });


  }
  return (
    <div className='display: flex items-center justify-center'>

      {/* first form*/}
      <div className='h-screen max-w-md mx-auto flex items-center justify-center '>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <div className="md:w-1/2 space-y-3">

                {       /*customer details*/}
                <h3 className="text-lg font-semibold">Customer Details</h3>
                <p>Name: {user?.displayName || "None"}</p>
                <p>Email: {user?.email}</p>
                <p>
                  User_id: <span className="text-sm">{user?.uid}</span>
                </p>

              </div>





              <label className="label">
                <span className="label-text">Name :</span>
              </label>
              <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered" defaultValue={user?.displayName} required />
            </div>


            {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input type="file" {...register("photoURL")}  className="file-input w-full mt-1" />
          {/* <input type="text" {...register("photoURL")} placeholder="photo url" className="input input-bordered" required /> */
            }


            <div className="form-control mt-6">
              <input type='submit' value={"Update"} className="btn bg-green text-white" />
            </div>



          </form>





        </div>
      </div>


      {/* first form ends*/}


      <div className='h-screen max-w-md mx-auto flex items-center justify-center '>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleOnSubmit}>

            {/* <label htmlFor="file-upload" className='custom-file-upload'>
              <img src={profile} alt="" className='h-32  w-32 bg-contain rounded-full mx-auto cursor-pointer ' />
            </label> */}

            {/* Name */}


            {       /*customer details*/}
            <h3 className="text-lg font-semibold">Address Details</h3>


            <div className="mb-3">
              <label htmlFor="name" className="block text-gray-700 text-sm mb-2 ">
                Mobile Number:
              </label>
              <input type="text" name="name" value={details.name} placeholder="Enter mobile Number here" onChange={onChange}
                className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-3">
              <label htmlFor="pin" className="block text-gray-700 text-sm mb-2 ">
                pincode:
              </label>
              <input type="text" name="pin" placeholder='Enter pincode Here' value={details.pin} onChange={onChange}
                className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-3">
              <label htmlFor="vvv" className="block text-gray-700 text-sm mb-2 ">
                village:
              </label>
              <input type="text" name="vvv" placeholder='Enter Your Village Name Here' value={details.vvv} onChange={onChange}
                className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>


            <div className='display: flex items-center justify-center'>
              <div className="mb-3">
                <label htmlFor="lll" className="block text-gray-700 text-sm mb-2 ">
                  land mark:
                </label>
                <input type="text" name="lll" value={details.lll} placeholder="Enter landmark  here" onChange={onChange}
                  className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div className="mb-3">
                <label htmlFor="ppp" className="block text-gray-700 text-sm mb-2 ">
                  plat no./room no:
                </label>
                <input type="text" name="ppp" value={details.ppp} placeholder="Enter plat/room number  here" onChange={onChange}
                  className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>


            <button className="btn bg-green text-white px-6">
              Add Address
            </button>

            <ToastContainer />
          </form>

        </div>

      </div>



    </div >
  )
}

export default UserProfile
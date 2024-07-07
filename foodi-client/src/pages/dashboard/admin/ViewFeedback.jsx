// import React from 'react'
// import { useState, useEffect } from 'react'

// function ViewFeedback() {

//     const [orderData, setOrderData] = useState("")

//     //sending maill to orderdata to fecth orders
//     const loadData = async () => {
//         // console.log(localStorage.getItem('userEmail'))
//         await fetch("http://localhost:5000/api/view_feedback", {
//             // credentials: 'include',
//             // Origin:"http://localhost:3000/login",
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },

//         }).then(async (res) => {
//             let response = await res.json()
//             console.log(response)
//             await setOrderData(response)
//         })
//         await res.map((data) => {
//             console.log(data)
//         })
//     }

//     useEffect(() => {
//         loadData();
//     }, [])



//     return (
//         <div className='container'>
//             <div className='row'>

//                 <div className="flex justify-between mx-4 my-4">
//                     <h2 className="text-2xl">All Users</h2>
//                     <h2 className="text-2xl">Total Reviews: {orderData.length}</h2>
//                 </div>
//                 <div className="overflow-x-auto">
//                     <table className="table table-zebra md:w-[870px]">
//                         {/* head */}
//                         <thead className="bg-green text-white">
//                             <tr>
//                                 <th>#</th>
//                                 <th>Item Name</th>
//                                 <th>Review</th>

//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>

//                             <tr  >






//                                 <td className="m-1"> { }</td>

//                                 <td className='m-1'> hiii</td>


//                             </tr>



//                             <div>
//                                 {orderData != {} ? Array(orderData).map(data => {
//                                     return (
//                                         data.orderData ?
//                                             //here orderData is coming form Orderdata.js
//                                             data.orderData.order_data.slice(0).reverse().map((item) => {
//                                                 return (
//                                                     //here arrayData is final array
//                                                     item.map((arrayData) => {
//                                                         return (

//                                                             <tr  >






//                                                                 <td className="card-title">{arrayData.itemname}|| "jiii"</td>

//                                                                 <td className='m-1'>{arrayData.review}|| hiii</td>


//                                                             </tr>








//                                                         )
//                                                     })

//                                                 )
//                                             }) : ""
//                                     )
//                                 }) : ""
//                                 }
//                             </div>

//                         </tbody>
//                     </table>
//                 </div>


//             </div>


//         </div>
//     )
// }

// export default ViewFeedback



import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ViewFeedback = () => {
    const axiosSecure = useAxiosSecure();
    const { data: feedbacks = [], refetch } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/feedbacks');
            return res.data;
        }
    })



    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/feedbacks/${user._id}`)
                    .then(res => {
                        console.log(res)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                refetch();
            }
        });
    }

    return (
        <div>
            <div className="flex justify-between mx-4 my-4">
                <h2 className="text-2xl">All Reviews</h2>
                <h2 className="text-2xl">Total Reviewss: {feedbacks.length}</h2>
            </div>

            {/* table */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra md:w-[870px]">
                        {/* head */}
                        <thead className="bg-green text-white">
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>REview</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedbacks.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn bg-orange-500 btn-xs"
                                        >
                                            <FaTrashAlt className="text-white" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewFeedback;

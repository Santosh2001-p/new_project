import React, { useState, useEffect } from "react";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight, FaEdit, FaTrashAlt, FaUsers } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const ManageBookings = () => {

  //fecthing address data

  const [jobdata, setjobdata] = useState([])

  const loadData = async () => {

    try {
      const response = await fetch("http://localhost:5000/retrive_address", {
        method: "GET", // Change to GET method
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // if (!response.ok) {
      //   throw new Error(HTTP error! Status: ${response.status});
      // }

      const data = await response.json();
      console.log(data);
      setjobdata(data); // Set the entire array, not just the first element
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [[jobdata]])




  const { user, loading } = useAuth();
  const token = localStorage.getItem("access_token");
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payments/all`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  //   console.log(menu)
  const axiosSecure = useAxiosSecure();

  //   pagination
  const [currentPage, setCurrentPage] = useState(1);
  const items_Per_Page = 10;
  const indexOfLastItem = currentPage * items_Per_Page;
  const indexOfFirstItem = indexOfLastItem - items_Per_Page;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  // delete item
  const handleDeleteItem = (item) => {
    console.log(item._id)
  }

  // confirm order
  const confiremedOrder = async (item) => {
    console.log(item)
    await axiosSecure.patch(`/payments/${item._id}`)
      .then(res => {
        console.log(res.data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Order Confirmed Now!`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      })

  }

  console.log(orders)


  return (
    <div>


      <div className="w-full md:w-[870px] mx-auto px-4 ">
        <h2 className="text-2xl font-semibold my-4">
          Manage All <span className="text-green">Bookings!</span>
        </h2>

        {/* menu items table  */}
        <div>
          <div className="overflow-x-auto lg:overflow-x-visible">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Delivary Address</th>
                  <th>Transition Id</th>
                  <th>list of items</th>
                  <th>Price</th>
                  {/* <th>Adress</th> */}
                  <th>Status</th>
                  <th>Confirm Order</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {item.email}
                    </td>




                    <td>
                      {/* {typeof (item.add_ress)} */}
                      {


                        item.add_ress != {}
                          ?
                          item.add_ress.filter((additem) => (additem?.email == item.email)).map((filterItems) => {
                            return (
                              <div>
                                <div key={index}>


                                  <div>
                                    {filterItems.name && (
                                      <div style={{ width: '20rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid green' }}>
                                        Name: {filterItems.name}
                                      </div>
                                    )}
                                    <div style={{ width: '20rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid green' }}>
                                      village: {filterItems.village}
                                    </div>
                                    {/* ... other properties */}
                                    <div style={{ width: '20rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid green' }}>
                                      pincode: {filterItems.pincode}
                                    </div>
                                    <div style={{ width: '20rem', marginBottom: '1rem', paddingBottom: '0.5rem' }}>
                                      mobile: {filterItems.mobile}
                                    </div>
                                  </div>








                                  {/* {

                                    arrayData != [] ?
                                      arrayData.map((item_inner_data) => {
                                        return (

                                          <div key={item_inner_data._id} >
                                            <div>{item_inner_data.name}</div>
                                            <div>{item_inner_data.qty}</div>
                                            <div>{item_inner_data.price}</div>
                                            <hr />
                                          </div>

                                        )
                                      }
                                      )
                                      : ""



                                  } */}



                                </div>

                                <div >


                                </div>
                              </div>
                            )

                          }) : ""

                      }





                    </td>
                    <td>{item.transitionId}</td>
                    <td>
                      <ul>
                        {item.itemsName.map((item, index) => (
                          <>
                            <li key={item} style={{ display: 'inline-block', marginRight: '5px', padding: '2px 5px' }}>
                              {index + 1}. {item}
                            </li>


                          </>
                        ))}
                      </ul>

                    </td>
                    {/* <td>{item.itemsName}</td> */}
                    <td>₹{item.price}</td>
                    {/* address co{l*/}
                    {/* <td>
                      {
                        jobdata != []
                          ?
                          jobdata.filter((additem) => (additem.email == item.email)).map((filterItems) => {
                            return (
                              <div>
                                <div>Name:{filterItems.name}
                                </div>
                                <div>village:{filterItems.village}
                                </div>
                                <div>pincode:{filterItems.pincode}
                                </div>
                                <div>mobile:{filterItems.mobile}
                                </div>

                              </div>
                            )
                          }) : <div>"no data found" </div>

                      }
                    </td> */}


                    {/* <td> {





                      jobdata.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {item.email}
                          </td>
                          <td>{item.pincode}</td>



                        </tr>

                      ))}</td> */}
                    <td>
                      {item.status}
                    </td>
                    <td className="text-center">
                      {item.status === "confirmed" ? "done" : <button
                        className="btn bg-green text-white btn-xs text-center"
                        onClick={() => confiremedOrder(item)}
                      >
                        <GiConfirmed />
                      </button>}

                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrashAlt className="text-red"></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-sm mr-2 btn-warning"
          >
            <FaArrowLeft /> Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= orders.length}
            className="btn btn-sm bg-green text-white"
          >
            Next  <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}


export default ManageBookings
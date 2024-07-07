
import useCart from "../../hooks/useCart";
import React, { useState, useEffect } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAuth from "../../hooks/useAuth";

import { loadStripe } from "@stripe/stripe-js";


// outside of a component’s render to avoid
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);


const Payment = () => {

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



  const [cart] = useCart();





  // Calculate the cart price
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(cartTotal)
  const totalPrice = parseFloat(cartTotal.toFixed(2));
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart} addr={jobdata} />

      </Elements>
    </div>
  );
};

export default Payment;
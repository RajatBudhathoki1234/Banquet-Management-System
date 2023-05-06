import React, { useState } from "react";

import axios from "axios";

const Khalti = ({ payment }) => {
  const [paymentUrl, setPaymentUrl] = useState(null);

  const initiatePayment = async () => {
    const data = {
      return_url: "http://localhost:3000/verify/",
      website_url: "http://localhost:3000/",
      amount: 1300,
      purchase_order_id: "test12",
      purchase_order_name: "test",
      customer_info: {
        name: "Rajat Budhathoki",
        email: "budhathokirajat31@gmail.com",
        phone: "9843660087",
      },
      amount_breakdown: [
        {
          label: "Mark Price",
          amount: 1000,
        },
        {
          label: "VAT",
          amount: 300,
        },
      ],
      product_details: [
        {
          identity: "1234567890",
          name: "Khalti logo",
          total_price: payment,
          quantity: 1,
          unit_price: payment,
        },
      ],
    };

    const headers = {
      Authorization: "Key e53ffb1e15a443ce8c65cfb95e0037e8",
    };

    try {
      const response = await axios.post(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        data,
        { headers }
      );
      setPaymentUrl(response.data.payment_url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {console.log(payment)}
      <button
        style={{
          backgroundColor: "purple",
          padding: "15px 40px",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          border: "1px solid white",
        }}
        onClick={initiatePayment}
      >
        Pay Now Via Khalti
      </button>
      {paymentUrl && (
        <a
          href={paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "purple" }}
        >
          Pay Booking Charge
        </a>
      )}
    </div>
  );
};

export default Khalti;

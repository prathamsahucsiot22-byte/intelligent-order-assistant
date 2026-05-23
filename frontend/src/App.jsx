import { useState } from "react";

function App() {

  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const placeOrder = async () => {

    const orderData = {
      customerName: "Ashmita",

      items: [
        {
          itemName: product,
          quantity: 1
        }
      ]
    };

    try {

      const response = await fetch(
        "http://localhost:5000/api/orders/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(orderData)
        }
      );

      const data = await response.json();

      setMessage(data.message);

    } catch (error) {

      setMessage("Something went wrong");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >

        <h2>Electronics Order Assistant</h2>

        <p>
          Enter product name to place your order
        </p>

        <input
          type="text"
          placeholder="Example: Samsung TV"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            borderRadius: "5px",
            border: "1px solid gray"
          }}
        />

        <button
          onClick={placeOrder}
          style={{
            marginTop: "15px",
            padding: "12px 20px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Place Order
        </button>

        <p style={{ marginTop: "15px" }}>
          {message}
        </p>

      </div>

    </div>
  );
  export default App;
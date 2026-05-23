import { useState } from "react";

function App() {

  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("Office Head");

  const placeOrder = async () => {

    const orderData = {
      customerName: role,

      items: [
        {
          itemName: product,
          quantity: 1
        }
      ]
    };

    try {

      const response = await fetch(
        "https://intelligent-order-assistant.onrender.com/api/orders/create",
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
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #141e30, #243b55)",
        fontFamily: "Arial, sans-serif",
        padding: "20px"
      }}
    >

      <div
        style={{
          width: "420px",
          backgroundColor: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            color: "#243b55",
            marginBottom: "10px"
          }}
        >
          Electronics Order Dashboard
        </h1>

        <p
          style={{
            color: "gray",
            marginBottom: "20px",
            fontSize: "15px"
          }}
        >
          Role Based Smart Ordering System
        </p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px"
          }}
        >
          <option>Office Head</option>
          <option>Store Manager</option>
          <option>Purchase Team</option>
        </select>

        <p
          style={{
            color: "#555",
            marginBottom: "20px",
            fontSize: "14px"
          }}
        >
          Logged in as: <b>{role}</b>
        </p>

        <input
          type="text"
          placeholder="Enter product name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
            marginBottom: "20px"
          }}
        />

        <button
          onClick={placeOrder}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Place Order
        </button>

        {message && (
          <p
            style={{
              marginTop: "20px",
              color: "green",
              fontWeight: "bold"
            }}
          >
            {message}
          </p>
        )}

      </div>

    </div>
  );
}

export default App;
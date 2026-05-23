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
      background: "linear-gradient(to right, #0f172a, #1e293b)",
      fontFamily: "Arial, sans-serif",
      padding: "30px"
    }}
  >

    <div
      style={{
        width: "950px",
        minHeight: "520px",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}
    >

      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom right, #2563eb, #1e40af)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "36px",
            marginBottom: "20px"
          }}
        >
          Smart Electronics Ordering
        </h1>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "28px"
          }}
        >
          Manage and place electronics orders easily using a simple role-based dashboard system.
        </p>

      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px"
        }}
      >

        <div
          style={{
            width: "100%"
          }}
        >

          <h2
            style={{
              marginBottom: "10px",
              color: "#1e293b"
            }}
          >
            Electronics Order Dashboard
          </h2>

          <p
            style={{
              color: "gray",
              marginBottom: "25px"
            }}
          >
            Role Based Inventory Ordering System
          </p>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "18px",
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
              marginBottom: "20px",
              color: "#444"
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
              marginBottom: "20px",
              fontSize: "15px"
            }}
          />

          <button
            onClick={placeOrder}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#2563eb",
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

    </div>

  </div>
);
}

export default App;
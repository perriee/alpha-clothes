import React, { useState } from "react";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Simulasi login: Validasi email dan password
    if (email === "example@email.com" && password === "password123") {
      setLoggedIn(true);
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleGoToHome = () => {
    // Navigasi ke halaman utama setelah logout
    window.location.href = "/";
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "40px", border: "1px solid #ddd", borderRadius: "8px" }}>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "8px" }}>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} style={{ padding: "8px", marginBottom: "16px", borderRadius: "4px" }} />

            <label style={{ marginBottom: "8px" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ padding: "8px", marginBottom: "16px", borderRadius: "4px" }}
            />

            <button
              type="button"
              onClick={handleLogin}
              style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", borderRadius: "4px", cursor: "pointer" }}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Welcome!</h2>
          <p style={{ fontSize: "1.2em" }}>You are now logged in.</p>

          <button
            type="button"
            onClick={handleLogout}
            style={{ padding: "10px", backgroundColor: "#f44336", color: "white", borderRadius: "4px", cursor: "pointer", marginRight: "10px" }}
          >
            Logout
          </button>

          <button
            type="button"
            onClick={handleGoToHome}
            style={{ padding: "10px", backgroundColor: "#2196F3", color: "white", borderRadius: "4px", cursor: "pointer" }}
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;

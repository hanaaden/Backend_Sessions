import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Gmail:", gmail);
    console.log("Password:", password);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Gmail:</label>
          <input
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            style={{ width: "100%" }}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%" }}
            required
          />
        </div>

        <button type="submit" style={{ width: "100%" }}>
          Signup
        </button>

      </form>
      <p>
        <Link to={"/login"}> login here</Link>
      </p>
    </div>
  );
};

export default Signup;
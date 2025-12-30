import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      <h1>React Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("...loading");

  useEffect(() => {
    fetch("https://test-deploy-39q5.onrender.com/api/quote")
      .then(res => res.json())
      .then(data => setQuote(data.quote))
      .catch(() => setQuote("Failed to load quote"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Random Quote Generator</h1>
      <blockquote style={{ fontStyle: "italic", marginTop: "1rem" }}>"{quote}"</blockquote>
    </div>
  );
}

export default App;

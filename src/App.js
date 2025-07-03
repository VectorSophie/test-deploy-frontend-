import React, { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLanguage = () => {
    setLoading(true);
    setError(null);

    fetch("https://test-deploy-39q5.onrender.com/api/language")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setLanguage(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching language:", err);
        setError("Failed to load language");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: 900,
        margin: "2rem auto",
        padding: "1rem 2rem",
        color: "#222",
        lineHeight: 1.6,
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Jack Baeck</h1>
        <p style={{ fontSize: "1.25rem", color: "#555" }}>
          Student & Amateur Coder passionate about React and building clean apps.
        </p>
      </header>

      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          marginBottom: "3rem",
        }}
      >
        <h2>Random Language to Try</h2>

        {loading && <p style={{ fontSize: "1.25rem", color: "#999" }}>Loading...</p>}

        {error && <p style={{ fontSize: "1.25rem", color: "red" }}>{error}</p>}

        {!loading && !error && language && (
          <>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "1rem 0 0.25rem",
                color: "#f38181",
              }}
            >
              {language.name}
            </p>
            <p style={{ fontSize: "1.25rem", color: "#555" }}>
              {language.description}
            </p>
          </>
        )}

        <button
          onClick={fetchLanguage}
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1.25rem",
            backgroundColor: "#a0e7e5",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: "700",
            color: "#004d40",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#88d9d5")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#a0e7e5")}
        >
          Pick Another Language
        </button>
      </section>

      <footer style={{ marginTop: "4rem", textAlign: "center", color: "#888" }}>
        <p>
          Connect with me on{" "}
          <a
            href="https://github.com/jackbaeck"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#a0e7e5", textDecoration: "none" }}
          >
            GitHub
          </a>{" "}
          | Email:{" "}
          <a href="mailto:jack@example.com" style={{ color: "#a0e7e5" }}>
            jack@example.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

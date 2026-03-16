import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "40px",
        color: "#fff",
      }}
    >
      {/* 404 NUMBER */}

      <h1
        style={{
          fontSize: "140px",
          fontWeight: "900",
          background: "linear-gradient(45deg,#ff003c,#ff6a00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px",
        }}
      >
        404
      </h1>

      {/* TITLE */}

      <h2 style={{ fontWeight: "600", marginBottom: "10px" }}>
        Oops! Page Not Found
      </h2>

      <p style={{ color: "#9ca3af", maxWidth: "500px" }}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* BUTTONS */}

      <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
        <Link
          to="/"
          className="btn btn-red"
          style={{
            padding: "10px 25px",
            fontWeight: "600",
          }}
        >
          Go Home
        </Link>

        <Link
          to="/dashboard"
          className="btn btn-outline-light"
          style={{
            padding: "10px 25px",
            fontWeight: "600",
          }}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
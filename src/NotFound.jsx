import React from "react";
import { Link } from "react-router-dom"; // Ensure you've installed react-router-dom

const NotFound = () => {
  return (
    <div style={styles.body}>
      <div id="message" style={styles.message}>
        <h2 style={styles.h2}>404</h2>
        <h1 style={styles.h1}>Page Not Found</h1>
        <p style={styles.p}>
          The specified page was not found on this website. Please check the url
          for mistakes and try again.
        </p>
        <Link to="/" style={styles.link}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  body: {
    background: "#ECEFF1",
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  message: {
    background: "white",
    maxWidth: 360,
    margin: "100px auto 16px",
    padding: "32px 24px 16px",
    borderRadius: 3,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  h2: {
    color: "#ffa100",
    fontWeight: "bold",
    fontSize: 25,
    margin: "0 0 8px",
  },
  h1: {
    fontSize: 22,
    fontWeight: 300,
    color: "rgba(0,0,0,0.6)",
    margin: "0 0 16px",
  },
  h3: {
    color: "#888",
    fontWeight: "normal",
    fontSize: 16,
    margin: "16px 0 12px",
  },
  p: { lineHeight: "140%", margin: "16px 0 24px", fontSize: 14 },
  link: {
    display: "block",
    textAlign: "center",
    background: "#039be5",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "white",
    padding: 16,
    borderRadius: 4,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
};

export default NotFound;

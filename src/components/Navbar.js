
import React from "react";
import helloimage from "../images/page.png";

function Navbar() {
    return (
        <div style={{ height: "100vh", fontFamily: "Arial, sans-serif", position: "relative" }}>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${helloimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                }}
            ></div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px 60px",
                    zIndex: 1,
                    color: "#fff",
                }}
            >
                <div style={{ fontSize: "24px", fontWeight: "bold" }}></div>

                <div
                    style={{
                        display: "flex",
                        gap: "40px",
                        padding: "20px",
                        border: "2px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "48px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "-220px",
                        backgroundColor: "rgba(0, 22, 29, 0.8)",
                    }}
                >
                    <a href="features" style={{ textDecoration: "none", color: "#fff" }}>
                        <h2 style={{ margin: 0 }}>Features</h2>
                    </a>
                    <a href="#why-us" style={{ textDecoration: "none", color: "#fff" }}>
                        <h2 style={{ margin: 0 }}>Why Us</h2>
                    </a>
                    <a href="#tokenomics" style={{ textDecoration: "none", color: "#fff" }}>
                        <h2 style={{ margin: 0 }}>Tokenomics</h2>
                    </a>
                    <a href="#roadmap" style={{ textDecoration: "none", color: "#fff" }}>
                        <h2 style={{ margin: 0 }}>Roadmap</h2>
                    </a>
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                    <button
                        style={{
                            backgroundColor: "rgba(0, 128, 255, 0.8)",
                            border: "none",
                            borderRadius: "24px",
                            padding: "0px 20px",
                            height: "50px",
                            color: "#fff",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Log In
                    </button>
                    <button
                        style={{
                            backgroundColor: "transparent",
                            color: "#fff",
                            border: "1px solid rgba(255, 255, 255, 0.8)",
                            borderRadius: "24px",
                            padding: "10px 20px",
                            height: "50px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            backgroundColor: "rgba(11, 42, 45, 1)"
                        }}
                    >
                        Whitepaper
                    </button>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "calc(100vh - 120px)",
                    textAlign: "center",
                    zIndex: 1,
                    color: "#fff",
                }}
            >
                <h1 style={{ fontSize: "56px", fontWeight: "bold" }}>
                    When Innovation
                </h1>

                <h1 style={{ fontSize: "56px", fontWeight: "bold", textAlign: "center", gap: "10px" }}>
                    <span>Meets</span>
                    <span style={{ backgroundColor: "#55DAFF", padding: "0 20px", borderRadius: "12px" }}>
                        Investment
                    </span>
                </h1>

                <p style={{ fontSize: "24px", margin: "20px 0", opacity: 0.8, color: "rgba(0, 22, 29, 1)" }}>
                    Empowering Trading Through Advanced Technology
                </p>

                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "2px solid red",
                        borderRadius: "24px",
                        padding: "15px 40px",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        backgroundColor: "rgba(0, 22, 29, 0)",
                    }}
                >
                    Open dApp
                </button>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1,
                }}
            >
            </div>
        </div>
    );
}

export default Navbar;


import React from "react";
import "../App.css";
import graph from "../images/graph.png"
import wallet from "../images/wallet.png"
import tools from "../images/Tools.png"
import Future from "../images/Future Technology.png"
const AboutEthAi = () => {
  return (
    <div className="about-container">
      <section className="about-ethai">
        <h1>About EthAi</h1>
        <p>
          At EthAi, we're all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements.
        </p>
        <button className="read-more-btn">Read more</button>
      </section>

      <div className="features-grid">
        <div className="feature-box">
          <img src={graph} alt="icon" />
          <h3>Stay Ahead</h3>
          <p>No more guesswork—get clear, trustable insights.</p>
        </div>
        <div className="feature-box">
          <img src={wallet} alt="icon" />
          <h3>Know Your Assets</h3>
          <p>Always stay on top of how your investments are performing.</p>
        </div>
        <div className="feature-box">
          <img src={tools} alt="icon" />
          <h3>Simple, Not Overwhelming</h3>
          <p>
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>
        <div className="feature-box">
          <img src={Future} alt="icon" />
          <h3>Future-Proof</h3>
          <p>
            We're constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEthAi;

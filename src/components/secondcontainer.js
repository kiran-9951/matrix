

import React from "react";
import "../App.css";
const Container = () => {
  return (
    <div className="grid-container">
      <div className="grid-item trade-optimizer">
        <h2>Trade Optimizer</h2>
        <p>
          Find the right moments to buy or sell, with personalized trade
          suggestions designed to help you make the most of every opportunity.
        </p>
      </div>
      <div className="grid-item market-insight">
        <h2>Market Insight</h2>
        <p>
          Stay ahead of the market. Get real-time updates on market trends,
          track top traders' movements, and spot signals from key influencers.
        </p>
      </div>
      <div className="grid-item risk-guard">
        <h2>Risk Guard</h2>
        <p>
          Get alerts on market swings and potential risks before they impact
          your portfolio. This agent helps you navigate volatility and stay
          prepared for anything.
        </p>
      </div>
      <div className="grid-item portfolio-sync">
        <h2>Portfolio Sync</h2>
        <p>
          Easily manage your portfolio. You'll always know what you own, how
          it's performing, and where it's headed.
        </p>
      </div>
      <div className="grid-item opportunity-scout">
        <h2>Opportunity Scout</h2>
        <p>
          Find exciting new projects, events and tokens that others might be
          missing. Identifying promising opportunities early, so you never miss
          out on the next big thing.
        </p>
      </div>
    </div>
  );
};

export default Container;

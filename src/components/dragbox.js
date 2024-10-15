import React from 'react';
import "../App.css";


const DappSection = () => {
  return (
    <div className="dapp-container">
      <div className="dapp-content">
        <h2>Explore Our <span className="highlight">dApp</span></h2>
        <p>
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className="open-dapp-btn">Open dApp</button>
      </div>
    </div>
  );
};

export default DappSection;

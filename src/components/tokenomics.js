// Tokenomics.js
import React from "react";
import "../App.css";
import image from "../images/Group 18.png"
const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <h1>Tokenomics</h1>

      <div className="tokenomics-content">
        <div className="chart-section">
          <div className="chart">
            <img src={image} alt="Tokenomics Chart" />
          </div>

          <div className="chart-label liquidity-label">
            <span>Liquidity Pool (90%)</span>
            <div className="line"></div>
          </div>

          <div className="chart-label marketing-label">
            <span>Marketing (5%)</span>
            <div className="line"></div>
          </div>

          <div className="chart-label team-label">
            <span>Team (35%)</span>
            <div className="line"></div>
          </div>
        </div>

        <div className="info-section">
          <div className="token-info">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>EthAi</td>
                </tr>
                <tr>
                  <td>Token Name</td>
                  <td>:</td>
                  <td>$EthAi</td>
                </tr>
                <tr>
                  <td>Token Standard</td>
                  <td>:</td>
                  <td>ERC20</td>
                </tr>
                <tr>
                  <td>Blockchain</td>
                  <td>:</td>
                  <td>Ethereum</td>
                </tr>
                <tr>
                  <td>Total Supply</td>
                  <td>:</td>
                  <td>100 Million</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>:</td>
                  <td>5%/5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="token-allocation">
            <table>
              <tbody>
                <tr>
                  <td>Team</td>
                  <td>:</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>:</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>Liquidity Pool</td>
                  <td>:</td>
                  <td>90%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

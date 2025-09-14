import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <table className="coins-table">
        <thead>
          <tr className="">
            <th>#</th>
            <th className="coin-name">Coin</th>
            <th>Price</th>
            <th>24H</th>
            <th className="hide-mobile">Volume</th>
            <th className="hide-mobile">Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <tr key={coin.id}>
              <CoinItem coin={coin} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;

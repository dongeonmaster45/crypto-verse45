import React from "react";
import "./Coins.css";
import { Link } from "react-router-dom";

const CoinItem = ({ coin }) => {
  return (
    <>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`} className="img-symbol">
          <img src={coin.image} alt={coin.name} />
          <span>{coin.symbol.toUpperCase()}</span>
        </Link>
      </td>
      <td>
        <Link className="link" to={`/coin/${coin.id}`}>
          ${coin.current_price.toLocaleString()}
        </Link>
      </td>
      <td>
        <Link className="link" to={`/coin/${coin.id}`}>
          {coin?.price_change_percentage_24h?.toFixed(2) || 0.0}%
        </Link>
      </td>
      <td className="hide-mobile">
        <Link className="link" to={`/coin/${coin.id}`}>
          ${coin.total_volume.toLocaleString()}
        </Link>
      </td>
      <td className="hide-mobile">
        <Link className="link" to={`/coin/${coin.id}`}>${coin.market_cap.toLocaleString()}</Link>
      </td>
    </>
  );
};

export default CoinItem;

import axios from "axios";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

function Cripto() {

  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const quantities = {
    BTC: 0.5,
    ETH: 10,
    USDT: 1000,
  };

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://query1.finance.yahoo.com/v8/finance/chart/BTC-USD');
        const prices = response.data.quoteResponse.result.reduce((acc, crypto) => {
          acc[crypto.symbol.split('-')[0]] = crypto.regularMarketPrice;
          return acc;
        }, {});
        setCryptoData(prices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the crypto prices', error);
      }
    };

    fetchPrices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const data = {
    labels: ['BTC', 'ETH', 'USDT'],
    datasets: [
      {
        data: [
          cryptoData.BTC * quantities.BTC,
          cryptoData.ETH * quantities.ETH,
          cryptoData.USDT * quantities.USDT,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="app">
      <h2>Crypto Portfolio Tracker</h2>
      <Pie data={data} />
      <ul>
        <li>BTC: {quantities.BTC} @ ${cryptoData.BTC.toFixed(2)} each = ${(cryptoData.BTC * quantities.BTC).toFixed(2)}</li>
        <li>ETH: {quantities.ETH} @ ${cryptoData.ETH.toFixed(2)} each = ${(cryptoData.ETH * quantities.ETH).toFixed(2)}</li>
        <li>USDT: {quantities.USDT} @ ${cryptoData.USDT.toFixed(2)} each = ${(cryptoData.USDT * quantities.USDT).toFixed(2)}</li>
      </ul>
    </div>
  );
};

export default Cripto;
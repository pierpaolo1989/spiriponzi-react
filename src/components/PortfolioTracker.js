import { useState } from "react";
import { Pie } from "react-chartjs-2";
import Accordion from "./layout/Accordion";

const PortfolioTracker = () => {
    const [assets, setAssets] = useState({
      Cripto: [],
      P2P: [],
      ETF: [],
      Stocks: []
    });
  
    const addAsset = (type, quantity, price) => {
      setAssets({
        ...assets,
        [type]: [...assets[type], { quantity: parseFloat(quantity), price: parseFloat(price) }]
      });
    };
  
    const calculateValue = (type) => {
      return assets[type].reduce((total, asset) => total + (asset.quantity * asset.price), 0).toFixed(2);
    };
  
    const data = {
      labels: Object.keys(assets),
      datasets: [
        {
          data: Object.keys(assets).map(type => calculateValue(type)),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  
    return (
      <div className="App">
        <h2 className="text-2xl">Financial Portfolio Tracker</h2>
        {Object.keys(assets).map(type => (
          <Accordion key={type} title={type}>
            <div className="p-8">
              <input type="number" 
              className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Quantity" 
              id={`quantity-${type}`} />
              <input type="number" 
              className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Price" id={`price-${type}`} />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addAsset(type, document.getElementById(`quantity-${type}`).value, document.getElementById(`price-${type}`).value)}>
                Add {type}
              </button>
              <p className="text-md mt-5">Total Value: ${calculateValue(type)}</p>
            </div>
          </Accordion>
        ))}
      </div>
    );
  };
  
  export default PortfolioTracker;
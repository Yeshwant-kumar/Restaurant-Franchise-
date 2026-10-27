import React, { useState, useEffect, useContext } from "react";
import { contextSales } from "../../../context/RequestSales";

const History = () => {
  const { salesData, callSales, loading } = useContext(contextSales);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  // 🔹 Fetch sales data on component mount
  useEffect(() => {
    const email = localStorage.getItem("user"); // Get email from local storage (or any auth system)
    if (email) {
      callSales(email);
    }
  }, []);

  useEffect(() => {
    setFilteredEvents(salesData);
  }, [salesData]);

  const handleSearch = () => {
    const filtered = salesData.filter((event) => {
      return (
        (!fromDate || event.date >= fromDate) &&
        (!toDate || event.date <= toDate)
      );
    });
    setFilteredEvents(filtered);
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setFilteredEvents(salesData);
  };

  const totalSales = filteredEvents.reduce((sum, event) => sum + parseInt(event.sales), 0);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 px-4 py-10 pt-20">
      <div className="w-full max-w-7xl">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold text-center md:text-left">Sales History</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium">From:</label>
              <input
                type="date"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium">To:</label>
              <input
                type="date"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>

            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>

            <button 
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded-md"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="relative border-l-4 border-gray-500 pl-8">
          {loading ? (
            <p>Loading...</p>
          ) : filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6 mb-8">
  
                <div className="absolute -left-[10px] w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="bg-white shadow-lg p-4 rounded-lg w-full">
                  <h3 className="text-2sm font-medium">Total Customers Visited - {event.cVisited}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    <span className="font-medium">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-700">Total Sales - {event.sales}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 mt-4">No sales data found in the selected date range.</p>
          )}
        </div>
        <div className="mt-10 p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-bold text-gray-800">Total Sales: {totalSales}</h3>
        </div>
      </div>
    </div>
  );
};

export default History;

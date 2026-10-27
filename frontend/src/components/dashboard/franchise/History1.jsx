import React, { useState } from "react";

const events = [
  { title: "Event 1", date: "2022-01-01", description: "100" },
  { title: "Event 2", date: "2022-02-01", description: "200" },
  { title: "Event 3", date: "2022-03-01", description: "150" },
  { title: "Event 4", date: "2022-04-01", description: "250" }
];

const History = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Function to filter events
  const handleSearch = () => {
    const filtered = events.filter(event => {
      return (
        (!fromDate || event.date >= fromDate) &&
        (!toDate || event.date <= toDate)
      );
    });
    setFilteredEvents(filtered);
  };

  // Function to reset filters
  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setFilteredEvents(events);
  };

  // Calculate total sales
  const totalSales = filteredEvents.reduce((sum, event) => sum + parseInt(event.description), 0);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-7xl">
        {/* Search Filter */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold text-center md:text-left">Event History</h2>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* From Date Input */}
            <div>
              <label className="block text-gray-600 text-sm font-medium">From:</label>
              <input
                type="date"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            {/* To Date Input */}
            <div>
              <label className="block text-gray-600 text-sm font-medium">To:</label>
              <input
                type="date"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>

            {/* Search Button */}
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>

            {/* Reset Button */}
            <button 
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded-md"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Event List */}
        <div className="relative border-l-4 border-gray-500 pl-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6 mb-8">
                {/* Timeline Dot */}
                <div className="absolute -left-[10px] w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>

                {/* Event Details */}
                <div className="bg-white shadow-lg p-4 rounded-lg w-full">
                  <h3 className="text-xl font-semibold">Total Sales - {event.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    <span className="font-medium">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-700">Total Customers Visited - {event.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 mt-4">No events found in the selected date range.</p>
          )}
        </div>

        {/* Total Sales Display */}
        <div className="mt-10 p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-bold text-gray-800">Total Sales: {totalSales}</h3>
        </div>
      </div>
    </div>
  );
};

export default History;

import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const contextSales = createContext();

const RequestSales = (props) => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function callSales(email) {
    setLoading(true);

    try {
      let url = `${API_URL}/user/requestSales`;
      let resp = await axios.post(url, { user: email }, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (resp.data.success) {
        setSalesData(resp.data.document);
        //console.log("Updated salesData:", resp.data.document);
      } else {
        alert(resp.data.message);
      }
    } catch (error) {
      //console.error("Error fetching sales data:", error);
      alert("Failed to fetch sales data");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log("Sales data state updated:", salesData);
  }, [salesData]);

  return (
    <contextSales.Provider value={{ callSales, salesData, loading }}>
      {props.children}
    </contextSales.Provider>
  );
};

export default RequestSales;

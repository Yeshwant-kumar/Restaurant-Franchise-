import React, { createContext } from "react";
import { useState } from "react";
export const userContext = createContext();
import axios from "axios";
import { useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;
const RequestData = (props) => {
  const [userData,setUserData]=useState([]);
  async function callData() {
    try {
        let url = `${API_URL}/user/search`;
        let resp = await axios.post(url,{headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        if(resp.data.success){
          setUserData(resp.data.document);
          
        }
        else{
          alert("Failed to fetch data.1");
        }
    } catch (error) {
        //console.error("Error fetching data:", error);
        alert("Failed to fetch data.2");
    }
}
useEffect(() =>{
console.log("Data Updated Success") 
},[userData])

  return (
    <div>
      <userContext.Provider value={{callData,userData}}>
        {props.children}
      </userContext.Provider>
    </div>
  );
};

export default RequestData;

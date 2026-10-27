import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RequestData from "./context/RequestData.jsx";
import RequestSales from "./context/RequestSales.jsx";

createRoot(document.getElementById("root")).render(
  <RequestSales>
    <RequestData>
      
        <BrowserRouter>
          <App />
        </BrowserRouter>

    </RequestData>
  </RequestSales>
);

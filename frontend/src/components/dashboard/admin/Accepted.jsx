import React from "react";
import { useContext,useState} from "react";
import { userContext } from "../../../context/RequestData";
import axios from "axios";
import emailjs from "@emailjs/browser";
const API_URL = import.meta.env.VITE_API_URL;
const Accepted = () => {
  const {userData} = useContext(userContext);
  const [openName, setOpenName] = useState(null);
  const [filteredJson, setFilteredJson] = useState(null);
  async function acceptedF(e) {
    let eData = { email: e, status: 2 };
    let url = `${API_URL}/user/doAccept`;

    try {
        let resp = await axios.post(url, eData, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          
        });
        const emailData = {
            email: e,  // Ensure your EmailJS template uses this field
            password: JSON.stringify(resp.data.password),
            message: "Your request has been accepted.",
        };

        // Send Email
        await emailjs.send(
            "service_this",     // Replace with your EmailJS Service ID
            "template_rkjmoui", // Replace with your EmailJS Template ID
            emailData,
            "ZzRZBRS5bFGXhr4kZ" // Replace with your EmailJS Public Key
        );
    } catch (error) {
        alert("Error: " + error.message);
    }

    closeModal();
}
  function Open(e) 
  {
    setOpenName(e);
    openModal();
    const founddata = userData.find((obj) => obj.email === e) || {};
    setFilteredJson(founddata);
    //alert(founddata.name)
  }
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
      <div className="w-full p-4 mt-14">
        <div className="w-full rounded-sm bg-gray-50">
          <div className="w-full flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
            {userData
              .filter((obj) => obj.status === 1)
              .map((obj, index) => (
                <a
                  key={index}
                  className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-4/12"
                  onClick={(e) => Open(obj.email)}
                >
                  {obj.name}
                  <div className="text-gray-500 font-thin text-sm">
                    <span>{obj.city}</span>
                    <span>{obj.zipcode}</span>
                    <span></span>
                  </div>
                </a>
              ))}
          </div>
        </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeModal}
          />
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="flex flex-col rounded-lg bg-slate-800 shadow-sm max-w-96 p-8 my-6 border border-slate-600">
              <div className="pb-8 m-0 mb-8 text-center text-slate-100 border-b border-slate-600">
                <h1 className="flex justify-center gap-1 mt-1 font-semibold text-white text-4xl">
                  {filteredJson.name}
                </h1>
              </div>
              <div className="p-0">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <p className="text-slate-300">{filteredJson.phonenumber}</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className="text-slate-300">{filteredJson.siteaddress}</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className="text-slate-300">Floor : {filteredJson.floor}</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className="text-slate-300">Area : {filteredJson.area}</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className="text-slate-300">Lifetime technical support</p>
                  </li>
                </ul>
              </div>
              <div className="p-0 mt-12"></div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Regected
              </button>
              <button
                onClick={(e) => acceptedF(filteredJson.email)}
                className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Accepted
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accepted;

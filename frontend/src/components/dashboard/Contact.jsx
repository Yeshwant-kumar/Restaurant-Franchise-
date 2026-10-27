import React from 'react'

const Contact = () => {
  return (
    <div className='pt-17'>
    <div className="relative w-full min-h-[calc(100vh-70px)] flex items-center justify-center">
      <div className="absolute inset-0">
        <div
          className="w-full h-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} // Change the path accordingly
        ></div>
        <div className="w-full h-1/2 bg-gray-100"></div>
      </div>

      <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <div className="flex items-center">
              <input type="checkbox" id="copy" className="w-4 h-4 text-blue-500" defaultChecked />
              <label htmlFor="copy" className="ml-2 text-sm text-gray-600">
                Send me a copy of this message
              </label>
            </div>
            <button className="w-full py-2 bg-blue-500 text-white font-medium uppercase rounded">
              SEND
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
            {[
              { title: "Support", email: "support@example.com", icon: "phone" },
              { title: "Sales questions", email: "sales@example.com", icon: "briefcase" },
              { title: "Press", email: "press@example.com", icon: "newspaper" },
              { title: "Bug report", email: "bugs@example.com", icon: "bug" },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-20 h-20 mr-3 bg-blue-100 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        item.icon === "phone"
                          ? "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          : item.icon === "briefcase"
                          ? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          : item.icon === "newspaper"
                          ? "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          : "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700">{item.title}</h3>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact

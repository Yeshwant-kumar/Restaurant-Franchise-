import React from 'react'
import { useNavigate } from 'react-router-dom';
const Admin = () => {
    let doRedirect = useNavigate();
  function doOpen()
  {
    doRedirect("/admin");
  }
  return (
    <div className="pt-18">
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              {/* User icon in circle */}
              <div className="mb-8">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto md:mx-0">
                  <svg
                  onClick={doOpen}
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-4xl mb-6 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>

              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>

              <p className="text-lg font-light leading-relaxed mt-0 mb-8 text-gray-600">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>

              <div className="mb-8">
                <a
                  href="#"
                  className="font-bold text-gray-800 text-xl hover:text-gray-600"
                >
                  Check Notus JS!
                </a>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  

                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-15">
          <div className="container mx-auto px-4">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Made with Notus JS by Creative Tim.
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Admin

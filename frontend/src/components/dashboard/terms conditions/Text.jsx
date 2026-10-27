import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const Text = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center py-12 bg-gradient-to-r from-red-400 to-rose-500 text-white text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold">Become a Franchise Partner</h2>
      <p className="mt-2 text-lg max-w-xl">
        Join our growing brand and start your journey toward a successful business. Fill out the form and let’s get started!
      </p>
      <Link to="/register">
        <button className="mt-6 flex items-center gap-2 bg-white text-red-600 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Get Franchise <ArrowRightCircle />
        </button>
      </Link>
    </div>
  );
};

export default Text;

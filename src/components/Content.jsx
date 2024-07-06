import React from "react";

import { useNavigate } from "react-router";

const Content = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Surprise");
  };

  return (
    <div>
      <main className="flex justify-center bg-rose-500 h-screen relative">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            title="Lottie Animation handFlower"
            className="absolute inset-0 w-full h-full"
            src="https://lottie.host/embed/c020452a-d1a0-4d92-9059-5cf2c9aae438/PzAOnyHyWh.json"
          ></iframe>
        </div>

        <div className="mt-10 relative z-10">
          <div className="text-center">
            <button
              className="px-8 py-2 rounded-xl bg-rose-100 font-bold text-2xl focus:text-rose-600 text-rose-600 "
              onClick={handleButtonClick}
            >
              Surprise
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;

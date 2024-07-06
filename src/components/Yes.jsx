import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
const Yes = () => {
  const navigate = useNavigate();

  const start = (e) => {
    navigate("/");
  };

  return (
    <div>
      <main className=" bg-rose-500 h-screen relative">
        <div className="flex justify-center pt-5">
          <button onClick={start} className=" text-rose-100 text-lg  z-50">
            Start Again
          </button>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            title="Lottie Animation"
            className="absolute inset-0 w-full h-full opacity-60 "
            src="https://lottie.host/embed/39b84496-d45f-47a6-af2e-5089dad93434/C2Gx3HpnCO.json"
          ></iframe>
          <iframe
            title="Lottie Animation"
            className="absolute inset-0 w-full h-full opacity-60 "
            src="https://lottie.host/embed/772c7d3d-eeeb-4845-8e67-6140ec098cda/TrZY36lyCQ.json"
          ></iframe>
          <iframe
            title="Lottie Animation star"
            className="absolute inset-0 w-full h-full "
            src="https://lottie.host/embed/58463a71-f91d-4ddc-a852-923898c676b5/vNXtHBfago.json"
          ></iframe>
          <iframe
            title="Lottie Animation celebration"
            className="absolute inset-0 w-full h-full "
            src="https://lottie.host/embed/60702f39-9f43-4a65-ba65-d10164b411e3/qbhwKFiOCX.json"
          ></iframe>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 4 }}
        >
          <div className="flex justify-center items-center h-[50vh]">
            <div className="flex flex-col items-center">
              <div className=" text-2xl  font-bold text-rose-100 mb-4 ">
                Happy Anniversary Ria
              </div>
              <div className="flex ">
                <iframe
                  title="Lottie Animation rose"
                  className="w-[20%]"
                  src="https://lottie.host/embed/1aa98d4c-73b6-486c-a346-bccf9a9da936/ZYIKhv6q1m.json"
                ></iframe>
                <iframe
                  title="Lottie Animation person"
                  className="w-[60%]"
                  src="https://lottie.host/embed/41f2d8f7-689d-404d-98d5-2e1d1c9b5b07/p5COO6eGCI.json"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Yes;

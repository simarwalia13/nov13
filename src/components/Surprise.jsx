import React, { useState } from "react";
import { motion } from "framer-motion";
import bitsvg from "../Images/bitemoji.png";
import { useNavigate } from "react-router";
import { message } from "antd";

const Surprise = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    const key = "loading";
    message.loading({ content: "Loading...", key });

    const randomMessages = [
      "You are my moon",
      "I cherish every moment with you",
      "You make my world brighter",
      "You are my sunshine",
      "You bring joy to my life",
      "I love you more each day",
      "You are my everything",
      "You complete me",
      "You are my soulmate",
      "You are my one and only",
      "Forever and always with you",
      "You make my heart skip a beat",
      "You are simply amazing",
      "You are the love of my life",
      "You make me a better person",
      "You are my one piece",
      "You are so special to me",
      "I'm so lucky to have you",
      "You are the reason for my smile",
      "You mean the world to me",
      "I love you my sunshine",
      "You give me hope",
    ];

    displayMessages(randomMessages, key);
  };

  const displayMessages = (messages, key) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        message.success({
          content: messages[index],
          key,
        });
        index++;
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 2000);
  };
  const handleClick = () => {
    const key = "loading";
    message.loading({ content: "Loading...", key });

    setTimeout(() => {
      message.success({ content: "Thanks Ria", key });

      setTimeout(() => {
        navigate("/Yes");
      }, 1000);
    }, 2000);
  };
  const handleNo = () => {
    const key = "loading";
    message.loading({ content: "Loading...", key });

    setTimeout(() => {
      message.success({
        content: "Please Ria say yes?",
        key,
      });
    }, 2000);
  };
  return (
    <div>
      <main className="flex justify-center bg-rose-500 h-screen relative">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            title="Lottie Animation"
            className="absolute inset-0 w-full h-full opacity-70"
            src="https://lottie.host/embed/90c2776c-915a-4af6-8a7d-9db760a279bd/1vhMpO5Az6.json"
          ></iframe>
        </div>

        <div className="mt-10 relative z-10">
          <div className="text-center">
            <button
              onClick={handleButtonClick}
              disabled={isLoading}
              className="px-8 py-2 rounded-xl bg-rose-100 font-bold text-2xl focus:text-rose-600 text-rose-600 "
            >
              Ria
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 60 }}
            transition={{ duration: 4 }}
            className="relative w-full flex flex-col items-center p-4"
          >
            <div className="flex">
              <img src={bitsvg} alt="bitImage" className="w-auto h-[23vh]" />
            </div>
            <div className="mt-0 w-full flex flex-col items-center">
              <p className="text-white text-md font-md max-w-[80%] text-center">
                I love You Ria. You are the most beautiful girl and the sweetest
                person in this entire universe. Please accept my sincerest
                apology for my irresponsible behavior!
              </p>
              <div className="flex gap-x-5 mt-[42%]">
                <button
                  onClick={handleNo}
                  className="px-5 py-1 font-bold text-rose-600 bg-rose-100 rounded-lg"
                >
                  No
                </button>
                <button
                  onClick={handleClick}
                  className="px-5 py-1 font-bold text-rose-600 bg-rose-100 rounded-lg"
                >
                  Yes
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Surprise;

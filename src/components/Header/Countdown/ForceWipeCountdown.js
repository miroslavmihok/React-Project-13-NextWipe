import React, { useState, useEffect } from "react";

const ForceWipeCountdown = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const nextMonth = new Date(now);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      nextMonth.setDate(1);

      while (nextMonth.getDay() !== 4) { // 4 represents Thursday
        nextMonth.setDate(nextMonth.getDate() + 1);
      }

      // Set the time to 20:00:00 CEST
      nextMonth.setHours(20, 0, 0, 0);

      const timeRemaining = nextMonth - now;
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    calculateCountdown();

    const intervalId = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="text-center text-[#E6DBD1] text-[16px] bg-[#793629] sm:space-x-2 px-[20px] py-[16px] rounded-[5px] border-[1px] border-[#fff]/40">
      <p className="font-['Poppins'] pb-[10px] font-semibold">Next Force Wipe in</p>
      <p className="font-['Poppins'] font-bold">{countdown}</p>
    </div>
  );
};

export default ForceWipeCountdown;
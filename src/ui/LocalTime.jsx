import React, { useEffect, useState } from "react";

const TimeDisplay = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    // Function to get the time for a specific timezone
    const getTimeForTimezone = (timezone) => {
      return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: timezone,
      }).format(new Date());
    };

    // Update the local time with a hardcoded timezone
    const updateLocalTime = () => {
      setLocalTime(getTimeForTimezone("America/Toronto")); // Replace with your timezone
    };

    // Update both times every second
    const interval = setInterval(() => {
      updateLocalTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="border-b pb-2 font-serif text-xl font-semibold md:text-2xl">
        Local Time
      </h2>
      <h3 className="mt-4 tracking-wider">{localTime}, TOR</h3>
    </div>
  );
};

export default TimeDisplay;

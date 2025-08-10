import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const userData=useSelector(state=>state.user);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = dateTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const formatDate = dateTime.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className='flex justify-between items-center px-8 mt-5'>
      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>
          Good Morning, {userData.name || "TEST USER"}
        </h1>
        <p className='text-[#ababab] text-sm'>Give your best services for customers</p>
      </div>
      <div >
        <h1 className='text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]'>{formatTime}</h1>
        <p className='text-[#ababab] text-sm'>{formatDate}</p>
      </div>
    </div>
  );
};

export default Greetings;

import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className=' flex items-center gap-5 bg-base-200 p-3'>
      <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
      <Marquee className='flex gap-5' pauseOnHover={true} speed={70}>
        <p className='font-bold'>Programming Hero, a popular online coding education platform based in Bangladesh, has announced the launch of its new advanced web development bootcamp.  </p>
        
        <p className='font-bold'>The intensive program is designed for individuals looking to enhance their skills in modern web technologies, including React, Node.js, and advanced JavaScript frameworks. The bootcamp will feature experienced instructors, hands-on projects, and career guidance to prepare graduates for the competitive job market. </p>

        <p className='font-bold'> With a focus on practical application and industry best practices, Programming Hero aims to empower aspiring developers in Bangladesh to excel in their careers. Enrollment for the new bootcamp is now open, with limited seats available to ensure personalized attention for all participants. The course is expected to commence in early May 2025.</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
import React from 'react';
import { v4 as uuid } from 'uuid';

export default function StethIcon(props) {
  const id = `steth_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M65.2893 88.6561C61.0565 95.6258 59.2345 103.804 60.1198 111.926C61.0354 120.326 64.792 128.162 70.768 134.136C77.7252 141.093 87.1607 145.001 96.9992 145.001C106.838 145.001 116.273 141.093 123.231 134.136C129.206 128.162 132.963 120.326 133.879 111.926C134.733 104.09 133.067 96.2016 129.147 89.3967L96.9612 142.882L65.2893 88.6561ZM73.3822 90.6156L97.0019 104.373L121.842 89.8998L97.0382 131.118L73.3822 90.6156Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M120.229 75.2972L97.0395 39L75.0063 73.4876L97.0873 65.7927L120.229 75.2972ZM120.282 81.8055L96.9129 72.2073L72.1401 80.8403L97.0395 95.3473L120.282 81.8055Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B9E6FF"/>
          <stop offset="1" stopColor="#59C1FC"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

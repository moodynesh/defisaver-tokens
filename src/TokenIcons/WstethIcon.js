import React from 'react';
import { v4 as uuid } from 'uuid';

export default function WstethIcon(props) {
  const id = `wsteth_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M65.2896 88.6561C61.0567 95.6258 59.2346 103.804 60.1201 111.926C61.0357 120.326 64.7922 128.162 70.7683 134.136C77.7254 141.093 87.1609 145.001 96.9995 145.001C106.838 145.001 116.273 141.093 123.231 134.136C129.207 128.162 132.963 120.326 133.879 111.926C134.733 104.09 133.067 96.2015 129.147 89.3967L96.9614 142.882L65.2896 88.6561ZM73.3826 90.6157L97.0022 104.373L121.842 89.8998L97.0386 131.118L73.3826 90.6157Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M120.229 75.2972L97.0393 39L75.0061 73.4876L97.0872 65.7927L120.229 75.2972ZM120.282 81.8054L96.9128 72.2073L72.1401 80.8403L97.0393 95.3473L120.282 81.8054Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A3FF"/>
          <stop offset="1" stopColor="#005E93"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RariIcon(props) {
  const id = `rari_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M74.2 59H119.8C128.195 59 135 65.8053 135 74.2V119.8C135 128.195 128.195 135 119.8 135H74.2C65.8053 135 59 128.195 59 119.8V74.2C59 65.8053 65.8053 59 74.2 59ZM115.585 90.3911C115.585 93.9924 113.455 95.7835 111.061 96.4057C113.927 97.2541 116 99.5734 116 103.25V110H105.067V103.589C105.067 101.628 103.899 100.837 101.901 100.837H88.9324V110H78V83H103.974C110.496 83 115.585 84.3954 115.585 90.3911ZM88.9324 93.5587H102.089C103.522 93.5587 104.389 93.3702 104.389 92.239C104.389 91.1076 103.522 90.919 102.089 90.919H88.9324V93.5587Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEDA03"/>
          <stop offset="1" stopColor="#A28C0F"/>
        </linearGradient>
      </defs>
    </svg>

  );
}

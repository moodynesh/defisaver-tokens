import React from 'react';
import { v4 as uuid } from 'uuid';

export default function TrbIcon(props) {
  const id = `trb_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.4995 193C149.795 193 192.999 149.796 192.999 96.5C193 43.2046 149.795 2.61911e-05 96.4995 1.68726e-05C43.204 7.55412e-06 -0.000495835 43.2045 -0.000505154 96.5C-0.000514472 149.795 43.204 193 96.4995 193Z" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M113.881 68.2034C110.81 68.3761 104.149 68.9121 103.427 69.0445C103.232 69.0801 102.183 69.2074 101.096 69.3275C96.5164 69.8331 88.7153 71.0335 83.5069 72.0339C73.5006 73.9559 63.144 76.604 62.2552 77.4677C61.6328 78.0726 62 78.091 75.1011 78.1071C88.1623 78.1233 91.5817 78.2462 96.5615 78.8792C103.823 79.8022 107.994 81.4963 109.208 84.0158C111.165 88.0765 103.555 95.0263 84.8123 106.296C80.521 108.876 76.6149 111.146 68.8145 115.591C57.5063 122.036 55.0107 123.563 53.5922 124.906C52.9226 125.541 52.8101 125.974 53.3096 125.996C54.9748 126.068 58.6749 125.21 64.4191 123.419C69.8886 121.715 77.4873 118.891 84.3977 115.993C88.6542 114.208 99.2385 109.445 100.884 108.574C101.156 108.43 102.904 107.554 104.769 106.628C123.959 97.0918 137.517 88.1075 142.91 81.352C143.345 80.8074 143.992 79.7796 144.348 79.0679C144.969 77.8272 144.996 77.7228 145 76.5217C145.004 75.3993 144.959 75.1804 144.57 74.4124C143.456 72.2111 140.666 70.5275 136.343 69.4482C131.149 68.1512 122.916 67.6948 113.881 68.2034Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.4995" y1="1.68726e-05" x2="96.4995" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#29FEA0"/>
          <stop offset="1" stopColor="#147349"/>
        </linearGradient>
      </defs>
    </svg>
  );
}



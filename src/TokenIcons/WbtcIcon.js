import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export default function WbtcIcon(props) {
  const memoizedUuid = useMemo(() => uuid(), []);
  const id = `wbtc_icon_${memoizedUuid}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} fillOpacity="0.9"/>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M110.017 81.7978C110.017 91.9371 94.2025 90.7035 89.1782 90.7035V72.8414C94.2025 72.8414 110.017 71.2529 110.017 81.7978ZM114.148 109.529C114.148 120.614 95.1972 119.347 89.1614 119.347V99.6768C95.1972 99.6937 114.148 97.9531 114.148 109.529ZM126.624 77.7927C125.613 67.214 116.508 63.6653 104.993 62.5837V48H96.0908V62.2965C93.7473 62.2965 91.3532 62.2965 88.9759 62.381V48H80.1244V62.6682H74.4595H62.0843V72.2161C62.0843 72.2161 68.6597 72.0978 68.5585 72.2161C71.0234 71.944 73.2591 73.6779 73.6165 76.1366V116.305C73.5086 118.048 72.0131 119.371 70.2749 119.264C70.2648 119.264 70.2546 119.264 70.2445 119.263C70.3625 119.364 63.7703 119.263 63.7703 119.263L62 129.926H73.5996H79.9727V144.831H88.8748V130.145H95.9897V144.763H104.909V130.027C119.948 129.115 130.435 125.397 131.75 111.286C132.812 99.9303 127.484 94.8606 118.97 92.8158C124.146 90.1796 127.4 85.5324 126.624 77.7927Z"
            fill="white"/>
      <defs>
        <linearGradient id={id} x1="193" y1="2.46321" x2="193" y2="193"
                        gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB9D3E"/>
          <stop offset="1" stopColor="#E7892A"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

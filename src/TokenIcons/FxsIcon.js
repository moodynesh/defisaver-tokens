import React from 'react';
import { v4 as uuid } from 'uuid';

export default function FxsIcon(props) {
  const id = `fxs_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M68.5951 57.2711C68.7219 57.4251 71.239 59.915 74.1885 62.8047L79.551 68.0587L81.1836 67.1122C84.4043 65.2448 88.0158 63.9199 91.7387 63.2403C94.283 62.7757 99.9277 62.769 102.427 63.2276C106.378 63.9521 110.048 65.3162 113.302 67.2693L115.161 68.385L115.645 67.878C115.912 67.5992 118.251 65.0566 120.843 62.2279C123.436 59.3992 125.65 57.0605 125.763 57.0308C126.038 56.9584 135.515 66.304 135.515 66.6484C135.515 66.8666 129.143 73.9612 125.528 77.7684L124.712 78.6278L125.402 79.8118C128.648 85.3852 130.277 93.3504 129.563 100.166C129.042 105.144 127.22 110.741 124.874 114.573L124.486 115.206L130.287 121.01C133.478 124.202 136.049 126.904 135.999 127.015C135.841 127.374 126.939 136.941 126.716 136.993C126.597 137.02 123.907 134.433 120.738 131.242C117.57 128.051 114.884 125.441 114.77 125.441C114.657 125.441 113.848 125.855 112.974 126.361C104.978 130.99 95.4338 131.902 86.7368 128.868C84.6952 128.155 81.8813 126.803 80.2295 125.74C79.6545 125.37 79.1528 125.067 79.1147 125.067C79.0766 125.067 76.5606 127.765 73.5237 131.062C70.4869 134.359 67.8898 137.031 67.7524 137C67.4333 136.927 58 127.713 58 127.474C58 127.376 60.5513 124.521 63.6696 121.13C66.7879 117.74 69.3392 114.884 69.3392 114.784C69.3392 114.684 68.9293 113.822 68.4283 112.868C62.8915 102.324 63.2517 89.1671 69.3598 78.8428L69.7649 78.1585L64.3472 72.7894C61.3674 69.8361 58.9294 67.3409 58.9294 67.244C58.9294 67.051 68.059 57.0144 68.2476 57.0001C68.3118 56.9953 68.4681 57.1172 68.5951 57.2711ZM94.8167 76.4533C88.4396 77.2476 82.6492 81.4355 79.7058 87.3822C73.3644 100.194 81.5483 115.708 95.3308 117.003C109.431 118.327 120.214 104.123 115.687 90.1875C113.89 84.6528 109.597 79.948 104.332 77.743C101.648 76.619 97.7398 76.0892 94.8167 76.4533Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303030"/>
          <stop offset="1" stopColor="#101010"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

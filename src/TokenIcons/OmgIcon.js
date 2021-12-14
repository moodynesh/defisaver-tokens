import React from 'react';
import { v4 as uuid } from 'uuid';

export default function OmgIcon(props) {
  const id = `omg_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.5 193C149.795 193 193 149.796 193 96.5C193 43.2046 149.795 2.61911e-05 96.5 1.68726e-05C43.2045 7.55412e-06 -7.55412e-06 43.2045 -1.68726e-05 96.5C-2.61911e-05 149.795 43.2045 193 96.5 193Z" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M67.8503 81.0928C71.5114 81.566 74.5826 83.3435 76.7744 86.2575C79.4078 89.7589 80.5543 94.6918 79.9083 99.742C79.1635 105.565 75.9201 110.149 71.21 112.033C69.0467 112.899 66.6061 113.187 64.132 112.868C60.127 112.352 56.7748 110.178 54.5815 106.674C51.8207 102.264 51.217 95.9266 53.0481 90.5781C54.7671 85.5569 58.5472 82.1268 63.3449 81.2347C64.6735 80.9876 66.5735 80.9278 67.8503 81.0928ZM132.069 81.2052C136.679 81.8956 139.965 84.5822 141.357 88.7978C141.633 89.6332 141.884 90.7676 141.949 91.4682L141.988 91.8914H139.34C136.461 91.8914 136.623 91.9101 136.623 91.5749C136.623 91.353 136.407 90.5816 136.217 90.1227C135.592 88.6151 134.161 87.3812 132.344 86.7834C130.833 86.2861 128.779 86.2609 127.2 86.7203C124.545 87.4928 122.588 89.7906 121.771 93.096C121.515 94.1294 121.401 94.9283 121.336 96.1327C121.191 98.8342 121.642 101.358 122.61 103.264C124.08 106.158 126.513 107.651 129.763 107.651C131.906 107.651 133.575 107.048 134.875 105.807C135.629 105.086 136.123 104.32 136.502 103.283C136.677 102.803 136.88 101.976 136.943 101.478L136.982 101.172H132.966H128.949V98.516V95.8599L135.474 95.8748L142 95.8896V104.032V112.175L139.574 112.19L137.148 112.205L137.132 110.535L137.117 108.865L136.769 109.379C136.379 109.956 135.675 110.7 135.118 111.123C132.831 112.862 129.253 113.456 125.98 112.638C121.732 111.576 118.558 108.355 117.014 103.536C116.378 101.55 116.101 99.6267 116.103 97.2093C116.105 93.7707 116.728 90.9172 118.059 88.2433C120.155 84.0306 123.803 81.5142 128.424 81.0928C129.283 81.0145 131.188 81.0732 132.069 81.2052ZM91.7901 86.0982C92.5891 88.4979 94.3246 93.7116 95.6467 97.6841C96.969 101.657 98.0639 104.907 98.0799 104.907C98.1071 104.907 99.5994 100.447 103.993 87.2364L105.822 81.7352H109.13H112.439V96.9694V112.204H109.997H107.556L107.554 101.566C107.553 95.3164 107.531 90.9649 107.5 91.017C107.452 91.1001 106.916 92.6869 104.359 100.326C103.79 102.027 102.661 105.396 101.85 107.811L100.376 112.204L98.0217 112.203L95.6673 112.203L93.1094 104.576C91.7026 100.382 90.1068 95.6169 89.5633 93.9874C89.0197 92.3581 88.5554 91.0054 88.5314 90.9814C88.5074 90.9576 88.4878 95.7228 88.4878 101.571V112.204H86.1043H83.7208V96.9694V81.7352H87.0292H90.3376L91.7901 86.0982ZM64.682 86.5452C61.4272 87.0936 59.0876 89.2181 57.9677 92.6424C57.4737 94.153 57.3001 95.4884 57.3431 97.4493C57.3747 98.8934 57.4695 99.6343 57.7672 100.763C58.9582 105.28 62.3706 107.854 66.7354 107.528C67.9596 107.437 68.8097 107.208 69.8559 106.688C72.0569 105.594 73.6963 103.362 74.3804 100.528C74.6862 99.2605 74.7391 98.7488 74.7391 97.057C74.739 95.2923 74.6755 94.7179 74.3329 93.3819C73.5301 90.2514 71.6093 87.9186 69.0623 86.9808C68.0982 86.6258 67.4662 86.5155 66.2516 86.49C65.4962 86.4741 65 86.4916 64.682 86.5452Z" fill="white"/>
      <circle cx="97" cy="97" r="69" stroke="white" strokeWidth="4"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="1.68726e-05" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303030"/>
          <stop offset="1" stopColor="#101010"/>
        </linearGradient>
      </defs>
    </svg>

  );
}


import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export default function DgdIcon(props) {
  const memoizedUuid = useMemo(() => uuid(), []);
  const id = `dgd_icon_${memoizedUuid}`;
  const fill = `url(#${id})`;
  return (
    <svg width={43} height={43} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="21.5" cy="21.5" r="21.5" fill={fill} fillOpacity="0.6" />
      <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M18.5411 12.8265V14.5883H15.0845H11.6279V17.1548V19.7213H16.0418H20.4558V15.393V11.0647H19.4984H18.5411V12.8265ZM21.7435 15.393V19.7213H26.1659H30.5883V17.1548V14.5883H27.8518H25.1154V15.4692V16.3501H26.8945H28.6736V17.1633V17.9764H26.1659H23.6582V15.393V12.8096H27.0385H30.4189V11.9371V11.0647H26.0812H21.7435V15.393ZM11.7974 12.259V13.3008H14.5169H17.2364V12.259V11.2172H14.5169H11.7974V12.259ZM18.3845 17.1675L18.3889 17.9764H15.8811H13.3732V17.1632V16.35L15.8766 16.3543L18.3801 16.3586L18.3845 17.1675ZM11.7974 26.7176V31.9353L18.9859 31.935C23.382 31.9348 26.3027 31.9283 26.5048 31.9183C26.6865 31.9092 26.9348 31.8871 27.0566 31.869C27.2792 31.8359 27.6221 31.759 27.6723 31.7308C27.6872 31.7224 27.8061 31.6806 27.9366 31.6379C28.3105 31.5153 28.944 31.1851 29.1785 30.9906C29.2093 30.9651 29.255 30.9328 29.2802 30.9189C29.4317 30.8347 29.9133 30.3821 30.1273 30.1227C30.1849 30.0528 30.2417 29.984 30.2534 29.9699C30.3237 29.8855 30.385 29.8027 30.385 29.7923C30.385 29.7856 30.4216 29.7295 30.4663 29.6676C30.5693 29.5252 30.6995 29.3151 30.7224 29.2545C30.7321 29.2288 30.7478 29.2079 30.7573 29.2079C30.7669 29.2079 30.7747 29.1963 30.7747 29.1822C30.7747 29.168 30.8117 29.0822 30.857 28.9916C30.9023 28.9009 30.9492 28.7965 30.9612 28.7596C30.9732 28.7227 31.0004 28.6579 31.0216 28.6156C31.0648 28.5295 31.1672 28.2019 31.2088 28.0165C31.2239 27.9497 31.2425 27.8871 31.2503 27.8773C31.2688 27.8541 31.3251 27.522 31.352 27.2767C31.3786 27.0349 31.3789 26.4886 31.3527 26.2179C31.3294 25.9779 31.2731 25.6293 31.2509 25.587C31.2422 25.5706 31.2185 25.4848 31.1982 25.3963C31.1596 25.2278 31.0323 24.818 31.014 24.8034C31.0082 24.7987 30.9774 24.7301 30.9455 24.6509C30.8598 24.4379 30.769 24.2547 30.6641 24.0834C30.6128 23.9996 30.5657 23.9195 30.5594 23.9055C30.5531 23.8916 30.5189 23.8432 30.4834 23.7981C30.4479 23.753 30.4189 23.7097 30.4189 23.7017C30.4189 23.6809 30.2648 23.482 30.1044 23.2957C29.813 22.9574 29.2813 22.4831 29.0448 22.3508C29.0113 22.332 28.9236 22.2792 28.85 22.2333C28.6423 22.1039 28.2601 21.918 28.0371 21.8379C27.9259 21.798 27.8273 21.7598 27.8179 21.7531C27.7288 21.6887 26.8964 21.5339 26.6395 21.5339C26.5836 21.5339 26.5387 21.5263 26.5387 21.5169C26.5387 21.5057 24.0705 21.5 19.168 21.5H11.7974V26.7176ZM26.5302 23.8006C26.7384 23.847 26.8377 23.8784 26.9762 23.9415C27.0351 23.9683 27.0894 23.9902 27.097 23.9902C27.1279 23.9902 27.4491 24.1538 27.4861 24.1884C27.508 24.2089 27.5511 24.2376 27.5817 24.2522C27.7792 24.3458 28.2839 24.8598 28.4225 25.1083C28.4459 25.1502 28.5051 25.2555 28.554 25.3423C28.6525 25.5167 28.7553 25.7897 28.8008 25.9977C28.8171 26.0722 28.8363 26.1408 28.8433 26.1501C28.8617 26.1744 28.8925 26.4229 28.9041 26.6409C28.9143 26.8303 28.8758 27.2615 28.8453 27.3005C28.8373 27.3107 28.8172 27.3762 28.8007 27.4461C28.7385 27.7083 28.6394 27.9469 28.4952 28.1813C28.4443 28.2642 28.4025 28.3385 28.4025 28.3464C28.4025 28.3544 28.3949 28.3609 28.3856 28.3609C28.3763 28.3609 28.3686 28.3723 28.3686 28.3863C28.3686 28.4002 28.3614 28.4117 28.3526 28.4117C28.3437 28.4117 28.3002 28.4631 28.256 28.526C28.1837 28.6287 27.8943 28.9368 27.8702 28.9368C27.8589 28.9368 27.797 28.9878 27.7007 29.0766C27.6628 29.1115 27.6262 29.1401 27.6195 29.1401C27.6127 29.1401 27.5479 29.1789 27.4754 29.2264C27.3199 29.3281 27.0528 29.4591 26.886 29.5152C26.8208 29.5372 26.7631 29.561 26.7578 29.568C26.7441 29.5865 26.3718 29.6611 26.1913 29.6816C26.0904 29.693 24.0361 29.6989 20.1127 29.699L14.1865 29.6991V26.7259V23.7527L20.2736 23.7578L26.3608 23.7629L26.5302 23.8006Z" fill="white" />
      <defs>
        <linearGradient id={id} x1={43} y1="0.548799" x2={43} y2={43} gradientUnits="userSpaceOnUse">
          <stop stopColor="#37B06F" />
          <stop offset={1} stopColor="#294C73" />
        </linearGradient>
      </defs>
    </svg>
  );
}

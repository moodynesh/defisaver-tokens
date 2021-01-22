import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export default function MkrIcon(props) {
  const memoizedUuid = useMemo(() => uuid(), []);
  const id = `mkr_icon_${memoizedUuid}`;
  const fill = `url(#${id})`;
  return (
    <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.9998 0.850333C43.7043 0.850329 0.499769 44.0549 0.499764 97.3503C0.49976 150.646 43.7043 193.85 96.9998 193.85C150.295 193.85 193.5 150.646 193.5 97.3503C193.5 44.0549 150.295 0.850338 96.9998 0.850333Z" fill={fill} />
      <path d="M49.5019 126.301V80.8812L83.946 106.804V126.301H92.7371V104.974C92.7355 104.182 92.5502 103.4 92.1958 102.691C91.8414 101.983 91.3275 101.366 90.6945 100.889L48.9229 69.4395C48.1589 68.8721 47.2524 68.5276 46.3044 68.4443C45.3563 68.361 44.4037 68.5423 43.5525 68.9679C42.7012 69.3935 41.9847 70.0469 41.4824 70.8553C40.9802 71.6637 40.712 72.5955 40.7075 73.5472V126.301H49.5019ZM144.76 126.301V80.8812L110.316 106.804V126.301H101.525V104.974C101.527 104.182 101.712 103.4 102.066 102.691C102.421 101.983 102.935 101.366 103.568 100.889L145.339 69.4524C146.102 68.8856 147.008 68.5412 147.955 68.4574C148.902 68.3736 149.853 68.5538 150.704 68.9778C151.555 69.4019 152.272 70.0533 152.775 70.8599C153.278 71.6664 153.548 72.5966 153.555 73.5472V126.301H144.76Z" fill="white" />
      <defs>
        <linearGradient id={id} x1="96.9998" y1="193.85" x2="96.9998" y2="0.850333" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4FA89B" />
          <stop offset="1" stopColor="#6ACEBB" />
        </linearGradient>
      </defs>
    </svg>

  );
}

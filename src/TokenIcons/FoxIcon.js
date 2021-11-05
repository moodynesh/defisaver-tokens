import React from 'react';
import { v4 as uuid } from 'uuid';

export default function FoxIcon(props) {
  const id = `fox_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M126.876 65.4863L123.472 85.9046L111.37 71.6543L126.876 65.4863ZM123.545 94.6864L126.575 105.877L103.411 112.26L123.545 94.6864ZM73.12 89.0623L85.5394 72.8288H107.107L120.892 89.0623H73.12ZM119.295 93.0732L96.8394 112.672L73.9671 93.0732H119.295ZM81.3806 71.666L70.2832 86.1712L66.8752 65.565L81.3806 71.666ZM90.1883 112.254L66.8035 105.882L70.0079 94.9624L90.1883 112.254ZM94.5061 117.587L90.0914 122.447C86.3506 118.892 82.2376 115.735 77.847 113.048L94.5061 117.587ZM115.918 112.974C111.527 115.705 107.424 118.902 103.707 122.491L99.199 117.581L115.918 112.974ZM132 59.131L107.65 68.8178H84.9542L61.7344 59.0518L67.009 90.9426L61.9439 108.205L75.1586 116.109C81.4153 119.851 87.0197 124.534 91.816 130.026L96.9614 135.918L102.362 129.722C106.995 124.405 112.391 119.841 118.4 116.156L131.359 108.205L126.692 90.9661L132 59.131Z" fill="#FFFFFE"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3C73F5"/>
          <stop offset="1" stopColor="#1F4296"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

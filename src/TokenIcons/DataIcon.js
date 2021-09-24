import React from 'react';
import { v4 as uuid } from 'uuid';

export default function DataIcon(props) {
  const id = `data_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M134.818 78.5455H127.636V85.7274H134.818V78.5455Z" fill="white"/>
      <path d="M120.454 78.5455H98.9089V85.7274H120.454V78.5455Z" fill="white"/>
      <path d="M98.909 57H77.3635V64.1818H98.909V57Z" fill="white"/>
      <path d="M134.818 107.273H98.9089V114.455H134.818V107.273Z" fill="white"/>
      <path d="M91.7272 114.454H84.5454V121.636H91.7272V114.454Z" fill="white"/>
      <path d="M70.1818 57H63V64.1818H70.1818V57Z" fill="white"/>
      <path d="M98.909 100.091H84.5454V107.273H98.909V100.091Z" fill="white"/>
      <path d="M77.3637 100.091H70.1819V107.273H77.3637V100.091Z" fill="white"/>
      <path d="M120.455 121.636H91.7273V128.818H120.455V121.636Z" fill="white"/>
      <path d="M91.7273 128.818H63V136H91.7273V128.818Z" fill="white"/>
      <path d="M98.9091 85.7273H63V92.9091H98.9091V85.7273Z" fill="white"/>
      <path d="M91.7273 71.3636H70.1819V78.5455H91.7273V71.3636Z" fill="white"/>
      <path d="M142 92.9091H106.091V100.091H142V92.9091Z" fill="white"/>
      <path d="M120.454 64.1818H98.9089V71.3636H120.454V64.1818Z" fill="white"/>
      <path d="M77.3636 114.454H63V121.636H77.3636V114.454Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF0029"/>
          <stop offset="1" stopColor="#8E081E"/>
        </linearGradient>
      </defs>
    </svg>

  );
}

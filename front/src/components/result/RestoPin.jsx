import React from 'react';

const ICON = `M15.8,0.9c-8.3,0-15,6.7-15,15c0,6.5,9.4,18.3,13.3,23c1,1.2,1.7,2,1.7,2s0.7-0.7,1.7-2
c3.9-4.7,13.3-16.5,13.3-23C30.8,7.7,24.1,0.9,15.8,0.9z M17.4,27.4c0-0.4,0-0.8,0-1.2c0-0.1,0-0.1,0-0.2c0-0.4,0-1.1,0.8-1.5
c1.9-1,2.8-2.6,2.8-4.9c0-2.1,0-4.3-0.1-6.4c0-1.3,0-2.6,0-3.9c0-0.6-0.1-1-0.3-1.2c-0.2-0.2-0.5-0.2-1.1-0.2
c-0.8,0-1.1,0.2-1.1,1.4c0,0.9,0,1.9,0,2.8c0,1.3,0,2.7,0,4c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5-0.2,0.7c-0.1,0.1-0.3,0.2-0.6,0.2
c-0.2,0-0.4,0-0.5-0.2C17,16.8,17,16.5,17,16.3c0-0.1,0-0.1,0-0.2c0-1.3,0-2.7,0-4.1c0-1,0-1.9,0-2.8c0-1.2-0.3-1.3-1.1-1.4l0,0
l0,0c-0.9,0-1.1,0.2-1.1,1.4c0,0.9,0,1.9,0,2.8c0,1.4,0,2.8,0,4.1c0,0.1,0,0.1,0,0.2c0,0.2,0,0.5-0.2,0.7c-0.1,0.1-0.3,0.2-0.5,0.2
c0,0,0,0,0,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.2-0.5-0.2-0.7c0-0.1,0-0.1,0-0.2c0-1.3,0-2.7,0-4c0-1,0-1.9,0-2.8
c0-1.2-0.3-1.4-1.1-1.4c0,0-0.1,0-0.1,0c-0.5,0-0.8,0.1-1,0.2c-0.2,0.2-0.3,0.5-0.3,1.2c0,1.3,0,2.6,0,3.9c0,2.1,0,4.3-0.1,6.4
c0,2.3,0.9,3.9,2.8,4.9c0.8,0.4,0.8,1.1,0.8,1.5c0,0.1,0,0.1,0,0.2c0,0.4,0,0.8,0,1.2c-5.6-0.8-9.9-5.6-9.9-11.5
c0-6.4,5.2-11.6,11.6-11.6s11.6,5.2,11.6,11.6C27.4,21.8,23,26.6,17.4,27.4z`;

const pinStyle = {
  fill: '#F1C40F',
  stroke: 'none',
};

const RestoPin = (props) => {
  const { size = 50, onClick } = props;

  return (
    <svg
      height={size}
      viewBox="0 0 40 40"
      style={{ ...pinStyle, transform: `translate(${-size / 2}px,${-size}px)` }}
      onClick={onClick}
    >
      <path d={ICON} />
    </svg>
  );
};

export default RestoPin;

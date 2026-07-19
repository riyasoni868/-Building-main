import React, { useEffect, useState } from 'react';
const PercentageCircle = ({ percentage, size = 120, strokeWidth = 8, color = '#ff8c00', delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  const radius = (size-strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
         <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          // strokeLinecap="round"
          className="transition-all duration-8000 ease-out"
        />
      </svg>
      
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">
          {Math.round(animatedPercentage)}%
        </span>
      </div>
    </div>
  );
};

const Circlediv = () => {
  const stats = [
    { percentage: 95 },
    {percentage: 87},
    {percentage: 67},
    {percentage: 50}
  ];

  return (
    <div className='flex'>
      
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <PercentageCircle
                percentage={stat.percentage}
              />
            </div>
          ))}
      </div>
  );
};

export default Circlediv;
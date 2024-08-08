import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { ColorValue } from 'react-native';

interface IconProps extends SvgProps {
  strokeColor?: ColorValue; // Color for the stroke
  strokeWidth?: number;     // Width of the stroke
  width?: number;           // Width of the SVG
  height?: number;          // Height of the SVG
}

const CustomRightForwordArrowIcon:  React.FC<IconProps> = ({
    strokeColor = "#000", // Default stroke color
    strokeWidth = 2,      // Default stroke width
    width = 24,          // Default width
    height = 24,    
    ...props              // Spread any additional props
  }) => (
    <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props} // Spread additional props to Svg component
    >
      <Path
        d="M8 5l8 7-8 7"
        stroke={strokeColor} // Apply the stroke color
        strokeWidth={strokeWidth} // Apply the stroke width
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );


export default CustomRightForwordArrowIcon;
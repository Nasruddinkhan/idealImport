import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface MenuIconProps extends SvgProps {
  width?: number; // Optional width prop
  height?: number; // Optional height prop
  fill?: string; // Optional fill color prop
}

const MenuIcon: React.FC<MenuIconProps> = ({
  width = 24,
  height = 24,
  fill = '#000000',
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <Path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </Svg>
);

export default MenuIcon;

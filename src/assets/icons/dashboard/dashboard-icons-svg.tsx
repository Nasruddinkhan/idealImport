import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DashboardIcon = (props: any) => (
  <Svg
    fill="#000000"
    height="24" // You can adjust the size here
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Allows passing additional props
  >
    <Path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8-2h8v8h-8v-8zm2 2v4h4v-4h-4z" />
  </Svg>
);

export default DashboardIcon;

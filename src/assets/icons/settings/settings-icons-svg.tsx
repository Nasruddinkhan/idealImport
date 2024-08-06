import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SettingsIcon = (props: any) => (
  <Svg
    height="20" // Adjust size here
    width="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Allows passing additional props
  >
    <Path 
      d="M12 15.5c1.5 0 2.75-1.25 2.75-2.75S13.5 10 12 10s-2.75 1.25-2.75 2.75S10.5 15.5 12 15.5zm6.75-2.75c0-.39-.06-.76-.17-1.11l1.89-1.09-1.34-2.32-2.1 1.21c-.21-.16-.44-.29-.68-.42l-.31-2.36h-2.6l-.31 2.36c-.24.12-.47.26-.68.42L4.4 9.34 3.06 11.66l1.89 1.09c-.11.35-.17.72-.17 1.11s.06.76.17 1.11l-1.89 1.09 1.34 2.32 2.1-1.21c.21.16.44.29.68.42l.31 2.36h2.6l.31-2.36c.24-.12.47-.26.68-.42l2.1 1.21 1.34-2.32-1.89-1.09c.11-.35.17-.72.17-1.11z" 
      fill="currentColor" // Allows dynamic color
    />
  </Svg>
);

export default SettingsIcon;

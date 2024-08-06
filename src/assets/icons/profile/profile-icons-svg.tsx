import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = (props: any) => (
  <Svg
    fill="#000000"
    height="24" // You can adjust the size here
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Allows passing additional props
  >
    <Path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-4.41 0-8 3.59-8 8v1h16v-1c0-4.41-3.59-8-8-8z" />
  </Svg>
);

export default ProfileIcon;

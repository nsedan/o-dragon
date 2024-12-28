import Svg, { Path } from "react-native-svg";
import React from "react";

const BrandIcon = ({ size, fill }: { size: number; fill: string }) => (
  <Svg height={size} viewBox="0 -960 960 960" width={size} fill={fill}>
    <Path d="M240-120v-80h200v-200L120-760v-80h720v80L520-400v200h200v80H240Zm58-560h364l72-80H226l72 80Z" />
  </Svg>
);

export default BrandIcon;

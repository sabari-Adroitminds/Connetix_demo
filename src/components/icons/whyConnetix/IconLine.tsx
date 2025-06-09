import { IIconProps } from "@/types/interfaces";
import * as React from "react";
const IconLine: React.FC<IIconProps> = (props) => (
  <svg
    width={894}
    height={12}
    viewBox="0 0 894 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      x1={508}
      y1={6.5}
      x2={888}
      y2={6.49997}
      stroke="black"
      strokeOpacity={0.1}
    />
    <circle
      cx={888}
      cy={6}
      r={4.5}
      fill="#D9D9D9"
      stroke="white"
      strokeWidth={3}
    />
    <line
      x1={388}
      y1={6.49969}
      x2={8}
      y2={6.49969}
      stroke="black"
      strokeOpacity={0.1}
    />
    <circle
      cx={6}
      cy={6}
      r={4.5}
      transform="rotate(-180 6 6)"
      fill="#D9D9D9"
      stroke="white"
      strokeWidth={3}
    />
  </svg>
);
export default IconLine;

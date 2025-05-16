import { IIconProps } from "@/types/intetrfaces";
import * as React from "react";


const IconGalleryButton:React.FC<IIconProps> = ({color, ...props}) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_2)">
      <rect width={40} height={40} fill="white" />
      <g clipPath="url(#clip1_1_2)">
        <path
          d="M39.3857 18.5169C40.2048 19.336 40.2048 20.664 39.3857 21.4831L21.4831 39.3857C20.664 40.2048 19.336 40.2048 18.5169 39.3857L0.614319 21.4831C-0.204773 20.664 -0.204773 19.336 0.614319 18.5169L18.5169 0.614319C19.336 -0.204773 20.664 -0.204772 21.4831 0.614319L39.3857 18.5169Z"
          fill="white"
        />
        <path
          d="M21.1299 39.0322C20.5451 39.617 19.6196 39.6532 18.9922 39.1416L18.8701 39.0322L0.967775 21.1299C0.343945 20.506 0.343946 19.4939 0.967775 18.8701L18.8701 0.967772C19.4549 0.382979 20.3804 0.346793 21.0078 0.858397L21.1299 0.967772L39.0322 18.8701C39.617 19.4549 39.6532 20.3804 39.1416 21.0078L39.0322 21.1299L21.1299 39.0322Z"
          stroke="black"
          strokeOpacity={0.1}
        />
        <path
          d="M14.8601 20.7526C14.4048 20.3542 14.4048 19.6458 14.8601 19.2474L20.3415 14.4512C20.9881 13.8854 22 14.3446 22 15.2038V24.7962C22 25.6554 20.9881 26.1146 20.3415 25.5488L14.8601 20.7526Z"
          fill={color || 'currentColor'}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_2">
        <rect width={40} height={40} fill="white" />
      </clipPath>
      <clipPath id="clip1_1_2">
        <rect width={40} height={40} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default IconGalleryButton;

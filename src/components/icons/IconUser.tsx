import { IIconProps } from "@/types/interfaces";
import * as React from "react";
const IconUser:React.FC<IIconProps> = (props) => (
    <svg
        width={14}
        height={18}
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M13 16.5C13 14.2909 10.3137 12.5 7 12.5C3.68629 12.5 1 14.2909 1 16.5M7 9.5C4.79086 9.5 3 7.70914 3 5.5C3 3.29086 4.79086 1.5 7 1.5C9.20914 1.5 11 3.29086 11 5.5C11 7.70914 9.20914 9.5 7 9.5Z"
            stroke="#683C86"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default IconUser;

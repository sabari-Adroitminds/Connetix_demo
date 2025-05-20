import { IIconProps } from "@/types/intetrfaces";
import * as React from "react";
const IconMenu:React.FC<IIconProps> = (props) => (
    <svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={6}
            width={6}
            height={6}
            rx={1}
            transform="rotate(90 6 0)"
            fill="#683C86"
        />
        <rect
            x={15}
            width={6}
            height={6}
            rx={1}
            transform="rotate(90 15 0)"
            fill="#683C86"
        />
        <rect
            x={6}
            y={9}
            width={6}
            height={6}
            rx={1}
            transform="rotate(90 6 9)"
            fill="#683C86"
        />
        <rect
            x={15}
            y={9}
            width={6}
            height={6}
            rx={1}
            transform="rotate(90 15 9)"
            fill="#683C86"
        />
    </svg>
);
export default IconMenu;

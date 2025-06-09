import { IIconProps } from "@/types/interfaces";
import * as React from "react";
const IconDownArrow:React.FC<IIconProps>  = (props) => (
    <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8.75926 12.1142C8.36016 12.5798 7.63984 12.5798 7.24074 12.1142L3.41496 7.65079C2.85896 7.00212 3.31987 6 4.17422 6L11.8258 6C12.6801 6 13.141 7.00212 12.585 7.65079L8.75926 12.1142Z"
            fill={props.fill ?? "#9463A9"}
        />
    </svg>
);
export default IconDownArrow;

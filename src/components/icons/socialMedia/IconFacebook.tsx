import { IIconProps } from "@/types/intetrfaces";
import * as React from "react";
const IconFacebook:React.FC<IIconProps> = (props) => (
    <svg
        width={54}
        height={54}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={54} height={54} rx={27} fill="#F4EEFE" />
        <path
            d="M29.7243 18.8164V23.0813H34.9986L34.1635 28.8264H29.7243V42.0629C28.8342 42.1863 27.9236 42.2508 26.9993 42.2508C25.9324 42.2508 24.8846 42.1657 23.8643 42.0011V28.8264H19V23.0813H23.8643V17.8631C23.8643 14.6256 26.4878 12 29.7256 12V12.0027C29.7352 12.0027 29.7435 12 29.7531 12H35V16.9686H31.5715C30.5526 16.9686 29.7256 17.7958 29.7256 18.8151L29.7243 18.8164Z"
            fill="#27344F"
        />
    </svg>
);
export default IconFacebook;

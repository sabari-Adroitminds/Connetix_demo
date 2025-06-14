import { IIconProps } from "@/types/interfaces";
import * as React from "react";
const IconRivets:React.FC<IIconProps> = (props) => (
  <svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.28105 6.64187C9.28105 8.18222 8.03793 9.42581 6.49815 9.42581C4.95837 9.42581 3.71525 8.18222 3.71525 6.64187C3.71525 5.10152 4.95837 3.85794 6.49815 3.85794C8.03793 3.85794 9.28105 5.10152 9.28105 6.64187ZM38 13.0718V0.692451C38 0.310896 37.6892 0 37.3078 0H5.94722C2.6699 0 0 2.67088 0 5.94942V37.3075C0 37.6891 0.310788 38 0.692201 38H13.0669C13.4483 38 13.7591 37.6891 13.7591 37.3075V17.0004C13.7591 15.2057 15.2141 13.7501 17.0082 13.7501H37.3078C37.6892 13.7501 38 13.4392 38 13.0576"
      fill="#F89B4C"
    />
  </svg>
);
export default IconRivets;

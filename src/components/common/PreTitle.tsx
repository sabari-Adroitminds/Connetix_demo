import { FC } from "react";

interface PreTitleProps {
    title: string
}
 
const PreTitle: FC<PreTitleProps> = ({title}) => {
    return ( 
       <div className="flex items-center gap-[15px]">
        <div className=" size-3 rounded-[2px] bg-pink rotate-45"></div>
        <span className="text-sm leading-6 text-navy">{title}</span>
       </div>
     );
}
 
export default PreTitle;
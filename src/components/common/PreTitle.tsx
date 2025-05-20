import clsx from "clsx";
import { FC } from "react";

interface PreTitleProps {
    title: string
    className?: string
}
 
const PreTitle: FC<PreTitleProps> = ({title, className}) => {
    return ( 
       <div className={clsx("flex items-center justify-center gap-[15px]", className)}>
        <div className=" size-3 rounded-[2px] bg-pink rotate-45"></div>
        <span className="text-sm leading-6 text-navy">{title}</span>
       </div>
     );
}
 
export default PreTitle;
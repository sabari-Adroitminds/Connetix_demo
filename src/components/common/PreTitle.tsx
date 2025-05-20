import clsx from "clsx";
import { FC } from "react";

interface PreTitleProps {
    title: string
    color:string
    className?: string
}
 
const PreTitle: FC<PreTitleProps> = ({ title, className, color='primary' }) => {
    return ( 
       <div className={clsx("flex items-center justify-center gap-[15px]", className)}>
            <div className={clsx(" size-3 rounded-[2px] rotate-45",color)}></div>
        <span className="text-sm leading-6 text-navy">{title}</span>
       </div>
     );
}
 
export default PreTitle;
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface SliderItemProps extends PropsWithChildren {
    className?: string
}

const SliderItem: FC<SliderItemProps> = ({ children, className }) => {
  return (
    <div className={cn("embla__slide px-2 md:h-[851px] flex items-center justify-center rounded-lg", className)}>
      <div className="rounded-lg shadow-lg overflow-hidden">{children}</div>
    </div>
  );
};

export default SliderItem;

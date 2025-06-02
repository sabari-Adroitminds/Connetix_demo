import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export interface IIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}
export interface HeroImageCardProps {
  title: string
  subtitle?: string
  description: string
  descriptionForSmallScreens: string
  buttonText: string
  bgColorClass?: string
  titleColorClass?: string
  subtitleColorClass?: string
  descriptionColorClass?: string
  buttonColorClass: 'default' | 'primary' | 'primaryTint' | 'primaryLight' | 'secondary' | 'secondaryTint' | 'secondaryLight' | 'blue' | 'blueTint' | 'blueLight' | 'teal' | 'tealTint' | 'tealLight' | 'yellow' | 'yellowTint' | 'yellowLight' | 'pink' | 'pinkTint' | 'pinkLight' | 'watermelon' | 'watermelonTint' | 'watermelonLight' | 'charcoal' | 'charcoalTint' | 'charcoalLight' | 'destructive'
  buttonHoverColorClass?: string
  image: StaticImageData | string
}
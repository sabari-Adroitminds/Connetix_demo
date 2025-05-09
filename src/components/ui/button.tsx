import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
variant: {
  default: "bg-primary-foreground text-navy border border-off-white shadow-xs hover:bg-primary-foreground/90 hover:cursor-pointer",

  primary: "bg-primary/90 text-primary-foreground shadow-xs hover:bg-primary",
  primaryTint: "bg-[primary-tint] text-white shadow-xs hover:bg-[primary-tint]/80",
  primaryLight: "bg-[primary-light] text-primary shadow-xs hover:bg-[primary-light]/80",

  secondary: "bg-secondary text-white shadow-xs hover:bg-secondary/80",
  secondaryTint: "bg-[secondary-tint] text-white shadow-xs hover:bg-[secondary-tint]/80",
  secondaryLight: "bg-[secondary-light] text-secondary shadow-xs hover:bg-[secondary-light]/80",

  blue: "bg-blue text-white shadow-xs hover:bg-blue/80",
  blueTint: "bg-[blue-tint] text-white shadow-xs hover:bg-[blue-tint]/80",
  blueLight: "bg-[blue-light] text-blue shadow-xs hover:bg-[blue-light]/80",

  teal: "bg-[teal] text-white shadow-xs hover:bg-[teal]/80",
  tealTint: "bg-[teal-tint] text-white shadow-xs hover:bg-[teal-tint]/80",
  tealLight: "bg-[teal-light] text-[teal] shadow-xs hover:bg-[teal-light]/80",

  green: "bg-[green] text-white shadow-xs hover:bg-[green]/80",
  greenTint: "bg-[green-tint] text-white shadow-xs hover:bg-[green-tint]/80",
  greenLight: "bg-[green-light] text-[green] shadow-xs hover:bg-[green-light]/80",

  yellow: "bg-[yellow] text-white shadow-xs hover:bg-[yellow]/80",
  yellowTint: "bg-[yellow-tint] text-white shadow-xs hover:bg-[yellow-tint]/80",
  yellowLight: "bg-[yellow-light] text-[yellow] shadow-xs hover:bg-[yellow-light]/80",

  pink: "bg-[pink] text-white shadow-xs hover:bg-[pink]/80",
  pinkTint: "bg-[pink-tint] text-white shadow-xs hover:bg-[pink-tint]/80",
  pinkLight: "bg-[pink-light] text-[pink] shadow-xs hover:bg-[pink-light]/80",

  watermelon: "bg-[watermelon] text-white shadow-xs hover:bg-[watermelon]/80",
  watermelonTint: "bg-[watermelon-tint] text-white shadow-xs hover:bg-[watermelon-tint]/80",
  watermelonLight: "bg-[watermelon-light] text-[watermelon] shadow-xs hover:bg-[watermelon-light]/80",

  charcoal: "bg-[charcoal] text-white shadow-xs hover:bg-[charcoal]/80",
  charcoalTint: "bg-[charcoal-tint] text-white shadow-xs hover:bg-[charcoal-tint]/80",
  charcoalLight: "bg-[charcoal-light] text-[charcoal] shadow-xs hover:bg-[charcoal-light]/80",

  destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline",
}

,
      size: {
        default: "h-[50px] min-w-[100px] rounded-[100px] px-4 py-2 has-[>svg]:px-3 hover:cursor-pointer",
        sm: "h-8 rounded-[100px] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-[100px] px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

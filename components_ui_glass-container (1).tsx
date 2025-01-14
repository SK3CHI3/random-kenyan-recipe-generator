import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const GlassContainer = React.forwardRef<HTMLDivElement, GlassContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "bg-white/20 dark:bg-black/20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassContainer.displayName = "GlassContainer"

export { GlassContainer }


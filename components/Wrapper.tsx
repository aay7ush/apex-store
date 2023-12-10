import { cn } from "@/lib/utils"

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto p-2.5 md:px-7", className)}>
      {children}
    </div>
  )
}

export default Wrapper

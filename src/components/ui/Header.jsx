import { cn } from "@/lib/utils"

export default function Header({className,children}){
  return(
    <header className={cn("w-full flex items-center justify-between", className)}>
      {children}
    </header>
  )
} 
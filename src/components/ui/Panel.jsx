import { cn } from "@/lib/utils"

export default function Panel({className, children}){
  return (
    <div className={cn("bg-[white] rounded-[4px] shadow-[0_4px_6px_rgba(6,15,51,0.04)]", className)}>
      {children}
    </div>
  )
}
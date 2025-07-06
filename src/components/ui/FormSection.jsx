import { cn } from "@/lib/utils"

export default function FormSection({className, children}){
  return(
    <div className={cn("p-2", className)}>
      {children}
    </div>
  )
}
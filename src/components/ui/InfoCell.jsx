import { cn } from "@/lib/utils"

export default function InfoCell({className, children}){
  return (
    <div className={cn("rounded-[16px] px-4 py-2 ", className)}>
      {children}
    </div>
  )
}
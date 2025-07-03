import {SelectItem} from "@/components/ui/select"

export default function useSelectOptions(optionsData){
  return (
    <>
      {
        optionsData.map((option) => {
          return <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        })
      }
    </>
  )
}
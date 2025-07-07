import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import { Input } from "@/components/ui/Input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"

function formatDate(date) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  })
}

function isValidDate(date) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

export default function DatePicker({onChange}) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(new Date("2025-06-01"))
  const [month, setMonth] = React.useState(date)
  const [value, setValue] = React.useState(formatDate(date))

  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="June 01, 2025"
          className="bg-background pr-10"
          onChange={(e) => {
            const inputDate = new Date(e.target.value)
            setValue(e.target.value)
            if (isValidDate(inputDate)) {
              setDate(inputDate)
              setMonth(inputDate)
              
              if(onChange) onChange(formatDate(inputDate))
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(selectedDate) => {
                setDate(selectedDate)
                setValue(formatDate(selectedDate))
                setOpen(false)

                if(onChange) onChange(formatDate(selectedDate))
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

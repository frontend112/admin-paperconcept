import React, { FC } from 'react'
import { Select, SelectItem, SelectTrigger } from "@/components/ui/select"
import { SelectValue, SelectContent } from "@/components/ui/select"

interface Props {
  items: string[],
  buttonName: string,
}

const SelectSore: FC<Props> = ({ items, buttonName, }) => {
  return (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder={buttonName} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item: string) => (
          <SelectItem key={item} value={item}>{item}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectSore
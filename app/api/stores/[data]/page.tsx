import { prismadb } from "@/lib/prismadb"
import React, { FC } from 'react'

interface Props {
  params: { data: string }
}

export const Page: FC<Props> = ({
  params: { data }
}) => {
  // try to update database
  // refresh
  // we should use here zod  
  // prismadb.store.update({
  //   name: data
  // })
  return (
    <div>page</div>
  )
}
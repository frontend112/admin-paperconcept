import React, { FC } from 'react'

interface Props {
  children: React.ReactNode,
}

const layout: FC<Props> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default layout
import React, { FC } from 'react'

interface Props {
  children: React.ReactNode,
}

const layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {children}
    </div>
  )
}

export default layout
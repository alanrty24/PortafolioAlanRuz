"use client"

import React, { useEffect, useState } from 'react'

type Props = {
  animation?: string
  children: React.ReactNode
  className?: string
  id?: string
}

const AOSWrapper: React.FC<Props> = ({ animation, children, className, id }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div id={id} className={className} {...(mounted && animation ? { 'data-aos': animation } : {})}>
      {children}
    </div>
  )
}

export default AOSWrapper

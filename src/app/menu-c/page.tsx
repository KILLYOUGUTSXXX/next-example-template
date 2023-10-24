import React, { lazy } from 'react'

const MenuC = lazy(() => import('@afx/views/menu-c/index.layout'))

export default function RouteMenuC() {
  return (
    <div className="min-h-screen bg-gray-300 text-stone-800">
      <MenuC />
    </div>
  )
}

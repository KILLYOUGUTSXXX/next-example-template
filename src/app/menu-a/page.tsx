import React, { lazy } from 'react'

const MenuA = lazy(() => import('@afx/views/menu-a/index.layout'))

export default function RouteMenuA() {
  return (
    <div className="min-h-screen bg-gray-300 text-stone-800">
      <MenuA />
    </div>
  )
}

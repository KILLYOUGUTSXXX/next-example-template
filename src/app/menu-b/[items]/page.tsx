import React, { lazy } from 'react'

const MenuDynamicB = lazy(() => import('@afx/views/menu-b-index/index.layout'))
export default function RouteMenuDynamicB() {
  return (
    <div className="min-h-screen bg-gray-300">
      <MenuDynamicB />
    </div>
  )
}

'use client'

import './globals.css'
import './font.css'
import { ConfigProvider } from 'antd'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#504289'
        }
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ConfigProvider>
  )
}

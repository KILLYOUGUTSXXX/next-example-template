'use client'

import { Button, Col, Row } from 'antd'
import { useRouter, useParams } from 'next/navigation'

export default function MenuDynamicB() {
  const params = useParams()
  const navigate = useRouter()

  const onNavigate = (path: string) => {
    navigate.push(path)
  }
  return (
    <Row className="text-black p-32 flex flex-col gap-y-4">
      <Col className="text-lg">
        <p>
          Route Index : <strong className="underline">@{params?.items}</strong>
        </p>
      </Col>
      <Col style={{ width: 200 }} className="gap-y-2 flex-col flex">
        <Button onClick={() => onNavigate('/menu-a')} block type="primary">
          Go to Page A
        </Button>
        <Button onClick={() => onNavigate('/menu-c')} block type="primary">
          Go to Page C
        </Button>
      </Col>
    </Row>
  )
}

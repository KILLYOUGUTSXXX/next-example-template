'use client'

import { IStateTest } from '@lynx/models/testing.model'
import { useLynxStore } from '@lynx/store/core'
import { Button, Col, Row } from 'antd'
import { useRouter, useParams } from 'next/navigation'

export default function MenuC() {
  const params = useParams()
  const navigate = useRouter()

  const { state } = useLynxStore<IStateTest, any>('testing')

  const onNavigate = (path: string) => {
    navigate.push(path)
  }
  return (
    <Row className="text-black p-32 flex flex-col gap-y-4">
      <Col className="text-lg">
        <p>
          Current Value :<strong> {state.counting}</strong>
        </p>
      </Col>
      <Col style={{ width: 200 }} className="gap-y-2 flex-col flex">
        <Button onClick={() => onNavigate('/menu-a')} block type="primary">
          Go to Page A
        </Button>
        <Button
          onClick={() => onNavigate('/menu-b/KILLYOUGUTS')}
          block
          type="primary"
        >
          Go to Page B
        </Button>
      </Col>
    </Row>
  )
}

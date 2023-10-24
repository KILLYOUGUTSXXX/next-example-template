import { Icons } from '@afx/components/icons'
import { IActionTest, IStateTest } from '@lynx/models/testing.model'
import { useLynxStore } from '@lynx/store/core'
import { Button, Col, Row, Skeleton } from 'antd'
import { useRouter } from 'next/navigation'

export default function MenuA() {
  const navigate = useRouter()
  const { state, useActions, isLoading } = useLynxStore<
    IStateTest,
    IActionTest
  >('testing')

  const LOADINGS = isLoading('resetValues') || false
  const onIncreaseValue = () => {
    useActions<'updateState'>('updateState', [{ counting: state.counting + 1 }])
  }

  const onDecreaseValue = () => {
    useActions<'updateState'>('updateState', [{ counting: state.counting - 1 }])
  }

  const onResetValue = () => {
    useActions<'resetValues'>('resetValues', [])
  }

  const onResetValueWithLoading = () => {
    useActions<'resetValues'>('resetValues', [], true)
  }

  const onNavigate = (path: string) => {
    navigate.push(path)
  }

  return (
    <Row className="w-full gap-y-4 pt-12 flex flex-col justify-between">
      <Col className="flex flex-row justify-center" flex="auto">
        <Row
          className="bg-slate-100 p-12 rounded-md gap-y-4"
          style={{ width: 400, height: 300 }}
        >
          <Skeleton active loading={LOADINGS} paragraph={{ rows: 5 }}>
            <Col span={24} className="text-center text-lg">
              <span>
                <strong>Value</strong>
                <p className="border-2 rounded-md">{state.counting}</p>
              </span>
            </Col>
            <Col span={24} style={{ gridTemplateColumns: '50% 50%' }}>
              <Row className="flex flex-col gap-y-2">
                <Row className="gap-y-2" gutter={12}>
                  <Col span={12}>
                    <Button
                      onClick={onDecreaseValue}
                      block
                      disabled={LOADINGS}
                      icon={<Icons type="MinusSquareOutlined" size={16} />}
                    >
                      Decrease
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      onClick={onIncreaseValue}
                      block
                      disabled={LOADINGS}
                      icon={<Icons type="PlusSquareOutlined" size={16} />}
                    >
                      Increase
                    </Button>
                  </Col>
                </Row>
                <Row className="gap-y-2 flex flex-col">
                  <Col span={24}>
                    <Button
                      onClick={onResetValue}
                      block
                      danger
                      disabled={LOADINGS}
                      icon={<Icons type="SyncOutlined" size={16} />}
                    >
                      Reset
                    </Button>
                  </Col>
                  <Col span={24}>
                    <Button
                      onClick={onResetValueWithLoading}
                      block
                      type="primary"
                      disabled={LOADINGS}
                      icon={<Icons type="ClockCircleOutlined" size={16} />}
                    >
                      Reset With Loading
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Skeleton>
        </Row>
      </Col>
      <Col className="flex flex-row justify-center" flex="auto">
        <Row style={{ width: 400 }} className="gap-y-2">
          <Button
            onClick={() => onNavigate('/menu-b/KILLYOUGUTS')}
            block
            type="primary"
            icon={LOADINGS ? <Icons type="LoadingOutlined" size={16} /> : null}
            disabled={LOADINGS}
          >
            Go to Page B
          </Button>
          <Button
            onClick={() => onNavigate('/menu-c')}
            block
            type="primary"
            icon={LOADINGS ? <Icons type="LoadingOutlined" size={16} /> : null}
            disabled={LOADINGS}
          >
            Go to Page C
          </Button>
        </Row>
      </Col>
    </Row>
  )
}

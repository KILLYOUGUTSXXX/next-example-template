interface IconCustom {
  type: string
  style?: React.CSSProperties
  size: number
  className?: string
  onClick?: () => void
}

export function Icons(props: IconCustom): React.JSX.Element {
  const Icon: any = require('@ant-design/icons/es/icons')[props.type]
  return (
    <p>
      <Icon
        onClick={typeof props.onClick === 'function' ? props.onClick : null}
        style={{ fontSize: props.size, ...props.style }}
        className={props.className}
      />
    </p>
  )
}

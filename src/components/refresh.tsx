'use client'

import { useRouter } from 'next/navigation'

interface Props {
  text?: string
  className?: string
}

export default function RefreshButton(props: Props) {
  let className = 'btn btn-primary btn-wide btn-sm'
  if (props.className) className += ` ${props.className}`

  return <button className={className} onClick={() => window.location.reload()}>{props.text ?? 'Refresh'}</button>
}

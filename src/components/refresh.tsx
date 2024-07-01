'use client'

import { useRouter } from 'next/navigation'

interface Props { 
  className?: string
}

export default async function RefreshButton(props: Props) {
  const { refresh } = useRouter()
  let className = 'btn btn-primary btn-wide btn-sm'
  if (props.className) className += ` ${props.className}`

  return <button className={className} onClick={refresh}>Refresh</button>
}

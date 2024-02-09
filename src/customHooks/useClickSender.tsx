import { useRef, useState } from 'react'

interface ClickSenderRes {
  count: number
  incrementCount: () => void
  serverCount: number
}
export const useClickSender = (): ClickSenderRes => {
  const [count, setCount] = useState(0)
  const [serverCount, setServerCount] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const incrementCount = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    setCount(prevCount => prevCount + 1)
    timer.current = setTimeout(() => {
      setServerCount(count + 1)
    }, 1000)
  }

  return { count, incrementCount, serverCount }
}

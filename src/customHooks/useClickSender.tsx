import { useRef, useState } from 'react'

import { clickerApi } from '@/api/zontApi'

interface ClickSenderRes {
  count: number
  error: null | string
  incrementCount: () => void
  isSending: boolean
  serverCount: number | undefined
}
export const useClickSender = (): ClickSenderRes => {
  const [count, setCount] = useState(0)
  const [serverCount, setServerCount] = useState<number | undefined>(0)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const incrementCount = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    setCount(prevCount => prevCount + 1)
    timer.current = setTimeout(() => {
      sendClicks(count + 1)
    }, 1000)
  }

  const sendClicks = async (count: number) => {
    setIsSending(true)
    setError(null)
    try {
      const res = await clickerApi.sendClicks(count)

      if (res.data.ok) {
        setServerCount(res.data.count)
      }
    } catch (err) {
      setError(err.response.data.error_ui)
    } finally {
      setIsSending(false)
      setCount(0)
    }
  }

  return { count, error, incrementCount, isSending, serverCount }
}

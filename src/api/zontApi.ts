import { RespType } from '@/api/types'
import axios from 'axios'

const settings = {
  headers: { 'X-ZONT-Client': 'aesadov@gmail.com' },
}
const instance = axios.create({
  baseURL: 'https://lk.zont-online.ru/api/',
  ...settings,
})

export const clickerApi = {
  sendClicks(count: number) {
    return instance.post<RespType>('button_count', { count })
  },
}

import { setupWorker } from 'msw'
// @ts-ignore
import { handlers } from './handlers'

const worker = setupWorker(...handlers)
export { worker }

import createHashSource from 'hash-source'
import { createHistory } from '@reach/router'

const history = createHistory(createHashSource())

export const HashRouter = history
export const navigate = history.navigate

import test from 'ava'
import { fibonacci } from '../index.js'

test('fibonacci', (t) => {
  t.is(fibonacci(8), 21)
})

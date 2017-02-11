import assert from 'power-assert'
import { sample1, sample2, sample3 } from '../src/examples'

describe('sample1', () => {
  it("returns 'sample1'", () => {
    assert(sample1() === 'sample1')
  })
})

describe('sample2', () => {
  it("returns 'sample2'", () => {
    assert(sample2() === 'sample2')
  })
})

describe('sample3', () => {
  it('returns response', async () => {
    const result = await sample3()
    assert(result === true)
  })
})

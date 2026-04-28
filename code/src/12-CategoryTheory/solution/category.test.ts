import { flow } from "effect/Function"
import { findLength, isGreaterThan5, convertToShortOrLong } from './category'

describe('Category Theory', () => {
  it('proof composition definition law', () => {
    // h = g . f 
    const g_after_f = isGreaterThan5(findLength('longer_string'))
    const h = flow(findLength, isGreaterThan5)('longer_string')
    expect(h).toEqual(g_after_f)
  })

  it('proof composition association', () => {
    // ( h . g ) . f 
    const h_after_g_after_f = flow(
      findLength, 
      flow(isGreaterThan5, convertToShortOrLong)
    )
    // h . ( g . f )
    const h_after_g_and_f = flow(
      flow(findLength, isGreaterThan5), 
      convertToShortOrLong
    )

    // ( h . g ) . f = h . ( g . f )
    expect(h_after_g_after_f('tiny')).toEqual(h_after_g_and_f('tiny'))
    expect(h_after_g_after_f('longer_string')).toEqual(h_after_g_and_f('longer_string'))
  })

  it('proof composition identity', () => {
    // f = id1 ∘ f
    const id1 = (x: string): string => x
    const id_f = flow(id1, findLength)
    expect(id_f('tiny')).toEqual(findLength('tiny'))

    // f = f ∘ id2
    const id2 = (x: number): number => x
    const f_id = flow(findLength, id2)
    expect(f_id('tiny')).toEqual(findLength('tiny'))
  })
})
export type Option<A> = Some<A> | None
type Some<A> = Readonly<{
  _tag: 'Some',
  value: A
}>
type None = Readonly<{
  _tag: 'None',
}>

export const some = <A>(value: A): Some<A> => ({
  _tag: 'Some',
  value
})

export const none: None = {
  _tag: 'None',
}

export const isSome = <A>(option: Option<A>): option is Some<A> =>
  option._tag === 'Some'

export const isNone = <A>(option: Option<A>): option is None =>
  option._tag === 'None'
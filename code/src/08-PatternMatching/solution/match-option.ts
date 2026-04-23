type Option<A> = Some<A> | None

type Some<A> = Readonly<{
  _tag: 'Some',
  value: A
}>

type None = Readonly<{
  _tag: 'None',
}>

const some = <A>(value: A): Option<A> => ({ _tag: 'Some', value })
const none: Option<never> = { _tag: 'None' }
const isNone = <A>(option: Option<A>): option is None => option._tag === 'None'

type Match = <A, B>(
  onNone: () => B,
  onSome: (a: A) => B
) =>
  (x: Option<A>) => B

const match: Match = (onNone, onSome) => x => isNone(x) ? onNone() : onSome(x.value)

type MatchW = <A, B, C>(
  onNone: () => B,
  onSome: (a: A) => C
) =>
  (x: Option<A>) => B | C

const matchW: MatchW = (onNone, onSome) => x => isNone(x) ? onNone() : onSome(x.value)

export { Option, none, some, match, matchW }
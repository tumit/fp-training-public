type Inc = (ns: number[]) => number[]
export const inc: Inc = ns => 
  ns.length === 0 
    ? [] 
    : [ns[0] + 1, ...inc(ns.slice(1))]

type Sqr = (ns: number[]) => number[]
export const sqr: Sqr = ns =>
  ns.length === 0 
    ? [] 
    : [ns[0] * ns[0], ...sqr(ns.slice(1))]

type ListMap = (f: (n: number) => number) => (ns: number[]) => number[]
export const listMap: ListMap = f => ns =>
  ns.length === 0
    ? []
    : [f(ns[0]), ...listMap(f)(ns.slice(1))]

type Map = <A, B>(f: (a: A) => B) => (as: A[]) => B[] 
export const map: Map = f => as => 
  as.length === 0
    ? []
    : [f(as[0]), ...map(f)(as.slice(1))]
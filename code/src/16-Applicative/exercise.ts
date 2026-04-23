// fmap0 :: a -> f a
type Fmap0 = <A>(f: (x: A) => A) => (x: A) => A

// fmap1 :: (a -> b) -> f a -> f b
type Fmap1 = <A, B>(f: (a: A) => B) => (x: A) => B

// fmap2 :: (a -> b -> c) -> f a -> f b -> f c
type Fmap2 = <A, B, C>(f: (a: A) => (b: B) => C) => (a: A) => (b: B) => C

// fmap3 :: (a -> b -> c -> d) -> f a -> f b -> f c -> f d
type Fmap3 = <A, B, C, D>(f: (a: A) => (b: B) => (c: C) => D) => (a: A) => (b: B) => (c: C) => D
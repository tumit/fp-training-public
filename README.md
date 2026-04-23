# Functional Programming with TypeScript

This repository contains a hands-on TypeScript training project for learning functional programming from fundamentals to higher abstractions such as `Functor`, `Applicative`, and `Monad`.

The runnable code lives in `code/`. Inside that folder you will find lesson-by-lesson exercises, tests, sample data, and reference solutions built with TypeScript, Jest, `fp-ts`, `effect`, and `ts-pattern`.

## Project Layout

```text
.
├── README.md
└── code
    ├── package.json
    ├── src
    │   ├── 00-TypeScript
    │   ├── 01-Function&Compose
    │   ├── ...
    │   └── 17-Monads
    ├── jest.config.js
    └── tsconfig.json
```

## Getting Started

This project is managed from the `code/` directory.

```bash
cd code
npm install
```

Check that everything is working:

```bash
npm run dev
npm test
```

Build the project:

```bash
npm run build
```

## Requirements

- Node.js 18 or later
- npm 9 or later
- TypeScript 5.2.2 (project version)

## Available Scripts

Run all commands from `code/`.

| Script | Description |
| --- | --- |
| `npm run dev` | Run `src/app.ts` with `ts-node` |
| `npm run watch` | Run `src/app.ts` with `nodemon` and reload on `.ts` changes |
| `npm test` | Run all Jest tests |
| `npm run test:spec` | Run tests with `jest-spec-reporter` |
| `npm run test:coverage` | Generate coverage report |
| `npm run test:watch` | Run Jest in watch mode |
| `npm run build` | Compile TypeScript to `dist/` |

## How the Lessons Are Organized

Most topics follow a practice-first structure:

- `begin/` contains the starter code for the lesson.
- `lab/` appears in some sections for a larger guided exercise.
- `solution/` contains a reference implementation.
- `*.test.ts` files describe the expected behavior and are intended to drive the exercises.

Recommended workflow:

1. Open the lesson under `code/src`.
2. Start from `begin/`.
3. Run the related test file or the whole test suite.
4. Implement the missing pieces until the tests pass.
5. Compare your result with `solution/`.

## Learning Modules

The `code/src` directory is organized as a sequence of lessons:

| Module | Topic |
| --- | --- |
| `00-TypeScript` | TypeScript warm-up |
| `01-Function&Compose` | Function composition, `compose`, `pipe`, and effects |
| `02-Problem-Solving` | Solving problems in a functional style |
| `03-Types` | Modeling with types |
| `04-Currying` | Currying and partial application |
| `05-Recursion` | Recursion, fold, map, linked lists, trees, and quicksort |
| `06-Option` | Optional values and safe composition |
| `07-Either` | Error-aware computations with `Either` |
| `08-PatternMatching` | Pattern matching with algebraic data |
| `09-TypeClass` | Ad hoc polymorphism, parametric thinking, and equality |
| `10-IO` | Delaying and modeling effects with `IO` |
| `11-Task` | Async functional effects with `TaskEither` and `effect` |
| `12-Exercise` | End-to-end exercise: summarize workdays from CSV data |
| `13-CategoryTheory` | Basic category theory concepts in code |
| `14-Monoid` | Combining values with identity |
| `15-Functor` | Mapping over contextual values |
| `16-Applicative` | Applying wrapped functions and validation patterns |
| `17-Monads` | Sequencing context-dependent computations |

## Notable Practice Files

- `code/src/app.ts` is a simple runnable entry point for quick experiments.
- `code/src/12-Exercise` contains a larger CSV-based exercise with `begin`, `lab`, and `solution` flows.
- `code/src/11-Task/solution/jsonplaceholder.http` can be used to manually inspect the sample HTTP endpoint used in the async examples.

## Main Libraries Used

- `typescript` `5.2.2` for the language and compiler
- `jest` and `ts-jest` for automated tests
- `fp-ts` for functional programming primitives and combinators
- `effect` for modern effectful programming examples
- `ts-pattern` for pattern matching examples

## Generated Folders

Some folders are build or test artifacts and can be regenerated:

- `code/dist`
- `code/coverage`
- `code/test-results`

## License

This project is licensed under the MIT License. See `code/LICENSE`.

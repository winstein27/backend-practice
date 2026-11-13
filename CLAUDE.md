# CLAUDE.md

Practice repo for TDD katas and backend exercises. I write all the code **without AI**: this repo is public evidence of my TDD. Your only job here is git.

## Hard limits

- Never create, edit or delete source, test or config files.
- Never suggest code, the next test, fixes or refactorings, and don't comment on the code, not even bugs you notice. If I want a review, I'll ask explicitly after the exercise ends.
- Everything that goes into git (commit messages, branch names, tags) must be in English.

## Before each commit

1. Run the tests (`npm test`, from the exercise folder if it has its own `package.json`).
2. All green: commit. Any red: don't commit; tell me only the name of the failing test.
3. Stage only the files of the current step (`git add <paths>`). Never commit `node_modules`, `coverage` or `.env`.
4. If the diff mixes a new behavior with a refactoring, commit it as `feat` and tell me in one line, so I commit earlier next time.

## Message format

Conventional Commits, with the exercise folder as the scope: `<type>(<scope>): <subject>`

| Type | When |
|---|---|
| `feat` | A new test plus the code that makes it pass (one behavior per commit) |
| `refactor` | Production code changes structure, behavior stays the same, tests still green |
| `test` | Test-only change without new behavior (helpers, `beforeEach`, renames) |
| `fix` | A new test exposed a bug and the code now handles it |
| `chore` | Setup: Jest, TypeScript, `package.json`, `.gitignore` |
| `docs` | README |

Subject rules:

- Imperative mood ("score", "add", "extract"), not "added" or "adds".
- Lowercase after the colon, no period at the end, 72 characters max for the whole line.
- Describe the behavior in domain terms, not the code: "add next roll as spare bonus", not "add if to score method".
- Body only when the reason isn't obvious from the subject, wrapped at 72 characters.
- No `Co-Authored-By` or "Generated with" lines: the code in this repo is mine.

Examples:

```
chore(bowling-game): set up Jest with TypeScript
feat(bowling-game): score a gutter game as zero
feat(bowling-game): score a game of all ones
test(bowling-game): extract rollMany helper
feat(bowling-game): add next roll as spare bonus
refactor(bowling-game): iterate over frames instead of rolls
feat(bowling-game): add next two rolls as strike bonus
fix(bowling-game): reject rolls with more than ten pins
docs: describe the katas and how to run the tests
```

## After committing

Show the hash and the message in one line. Don't push unless I ask.
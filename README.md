# Backend Practice

Timed backend exercises in TypeScript, built with test-driven development.

This repository is my deliberate practice for coding without AI assistance. Each exercise lives in its own folder and runs on its own.

## How I work

- **No AI and no autocomplete while coding.** Every line is written by hand.
- **Timed.** Each exercise has a time box, and the log below records how long it actually took.
- **Requirements first.** I spend the first minutes clarifying the requirements and stating my assumptions out loud, as in a pair programming session.
- **Strict TDD.** Write one failing test, make it pass with the simplest code, refactor while green, then commit.

## Stack

TypeScript, Node.js and Jest. Later exercises add a web framework, a database and Docker where the problem calls for it.

## Exercises

| Exercise                                 | Problem                                                | Date       | Time   | Status    | Notes                                                                                             |
| ---------------------------------------- | ------------------------------------------------------ | ---------- | ------ | --------- | ------------------------------------------------------------------------------------------------- |
| [String Calculator](./string-calculator) | [Roy Osherove's kata](https://osherove.com/tdd-kata-1) | 2026-11-06 | 70 min | Steps 1–8 | First TDD kata, done with a step-by-step guide. Long and multiple delimiters not implemented yet. |

## Running an exercise

```bash
cd string-calculator
npm install
npx jest
```

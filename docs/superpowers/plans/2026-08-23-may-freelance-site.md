# May Freelancer Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive, evidence-backed Chinese freelancer portfolio for May.

**Architecture:** A single Next/vinext route keeps the experience editorial and fast. Static content stays in the server component; a small client component handles only progressive scroll reveal and mobile navigation.

**Tech Stack:** React 19, TypeScript, vinext, CSS, Node test runner.

---

### Task 1: Contract tests

**Files:**
- Create: `tests/rendered-html.test.mjs`

- [ ] Write tests that request the built route and assert the title, three service directions, evidence labels, mail link, LinkedIn link, external-link safety, semantic headings, reduced-motion CSS, and absence of starter copy.
- [ ] Run `npm test` and confirm failure because the product page is not implemented.

### Task 2: Editorial page

**Files:**
- Modify: `app/page.tsx`
- Create: `app/Reveal.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] Replace the starter with semantic sections, verified public links, local magazine PDFs, and contact actions.
- [ ] Implement mobile navigation and progressive reveal with no-JavaScript-safe defaults.
- [ ] Apply the tokens and responsive rules in `DESIGN.md`.
- [ ] Remove the starter preview module and unused skeleton dependency.
- [ ] Run `npm test` and confirm all assertions pass.

### Task 3: Visual QA and refinement

**Files:**
- Modify only files implicated by browser evidence.

- [ ] Start the local development server and open the finished route.
- [ ] Capture desktop and mobile views; check hierarchy, text readability, overflow, focus, links, and image crops.
- [ ] Record one issue from art direction, engineering, client, and reader perspectives.
- [ ] Make a bounded second-pass patch for those issues.
- [ ] Run `npm run lint`, `npm test`, and `npm run build` with clean output.


# Hero Torn Reveal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the aged-paper intro and make it read as an open torn surface, with restrained jellyfish detail on the hero.

**Architecture:** Use the existing transparent paper and jellyfish raster assets. A pseudo-element owns the paper texture and horizontal fade mask; the semantic paragraph remains plain text above it.

**Tech Stack:** Next.js-compatible React, CSS, Node test runner.

---

### Task 1: Encode the visual contract

**Files:**
- Modify: `tests/rendered-html.test.mjs`

- [ ] Assert that the restored paper asset, horizontal mask, and hero jellyfish selector exist.
- [ ] Run `npm test` and confirm the new assertions fail before implementation.

### Task 2: Restore and compose the hero assets

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `内容与视觉素材清单.md`
- Restore: `public/assets/aged-paper-strip.png`
- Delete: `public/assets/aged-blue-river-stroke.png`

- [ ] Put the paper on `.hero-intro::before`, enlarge it beyond the paragraph, and fade only its horizontal ends.
- [ ] Add the existing transparent jellyfish art as an aria-hidden hero decoration.
- [ ] Hide the jellyfish on narrow screens where it competes with copy.
- [ ] Update the local asset record.

### Task 3: Verify and publish

**Files:**
- Test: `tests/rendered-html.test.mjs`

- [ ] Run `npm run lint && npm test`; expect all checks to pass.
- [ ] Inspect the desktop hero at `http://localhost:3000/` for overlap and horizontal overflow.
- [ ] Commit and push `main`.

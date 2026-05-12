# Trickle AI - Role & Working Map

This document outlines the responsibilities of the different AI agents working on the HexAtom Lab during the Trickle AI Phase 2 development.

## AI Engineering & Implementation Agent (e.g., Cursor/Windsurf/Claude)
**Primary Responsibilities:**
- Implement the React components (`FloatingToolbar.js`, `Canvas.js`, `NodePanel.js`, etc.).
- Integrate the Fabric.js modifications for infinite canvas, culling, and Smart Nodes.
- Implement the IndexedDB auto-save and persistence layer.
- Set up the UI/UX utilizing TailwindCSS and the Glassmorphism theme systems.
- Wire up third-party APIs (Unsplash, Giphy) and CDNs (CodeMirror, PDF.js).

**Constraint Checking:**
- Ensure no "patch-work" logic; implement robust, scalable algorithms (e.g., for auto-layout and smart routing).
- Adhere strictly to the "No Emojis" rule in the codebase structure and "Premium Aesthetics" guidelines.

## AI Design Intelligence Agent (UI/UX Pro Max)
**Primary Responsibilities:**
- Guide the implementation of the Glassmorphism visual language.
- Provide token specs and CSS variables for the 6 Core Themes (Aurora, Daylight, Ocean, Forest, Monochrome, Candy).
- Define the micro-interaction timing and keyframe animations for elements (e.g., node pop-in, connector drawing, confetti burst).
- Review all generated UI code for adherence to the premium aesthetic.

## AI Review & Optimization Agent
**Primary Responsibilities:**
- Review code PRs/changes for performance (e.g., `React.memo` usage, Canvas caching).
- Ensure the "Anti-Loop" principles are maintained; refactor if codebase becomes tangled.
- Verify that features align tightly with the `PRD.md` constraints.
- Maintain the state of `walkthrough.md`, `task.md`, and the `AI-Lab-Dashboard.html`.

## Lab Director / Architect (Pranav Sahu)
**Primary Responsibilities:**
- Provide visionary prompts and phase upgrades.
- Approve Strategic Maps (README, MIND_MAP, SITE_MAP, ROLE_WORKING_MAP) before build starts.
- Steer architectural pivots or handle complex disambiguation ("Push-Back" resolution).
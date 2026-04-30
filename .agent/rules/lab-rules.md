# HexAtom AI Lab | Global Rules

## Skill Discovery Protocol
Before implementing any complex feature, agents MUST:
1. **Search**: Query `AI-Lab-Skills/antigravity-awesome-skills/skills` for existing skills that match the task requirements.
2. **Reuse**: If a skill exists, read its `SKILL.md` and use its established patterns instead of inventing new ones.
3. **Reference**: Explicitly mention which skills are being used in the `PLAN.md`.

## Engineering Standards
- **Spec-First**: Always create a `SPEC.md` before writing code for new features.
- **Test-Driven**: Logic changes must be accompanied by unit or integration tests (The Beyonce Rule).
- **Graph Maintenance**: Run `/graphify .` after major structural changes to keep the project map current.

## UI/UX Standards
- Follow the design system in `AI-Lab-Dashboard.html` (Glassmorphism, Outfit/Inter fonts, neon accents).
- Prioritize high-fidelity micro-animations and smooth transitions.

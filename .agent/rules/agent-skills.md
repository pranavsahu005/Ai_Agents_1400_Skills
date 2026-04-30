---
trigger: always_on
---

# Agent Skills Rules

This project follows production-grade engineering workflows from [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills).

## Core Commands

| Command | Action | Principle |
|---------|--------|-----------|
| `/spec` | Define what to build | Spec before code |
| `/plan` | Plan how to build it | Small, atomic tasks |
| `/build` | Build incrementally | One slice at a time |
| `/test` | Prove it works | Tests are proof |
| `/review` | Review before merge | Improve code health |

## Quality Gates

1. **Spec-Driven Development**: Before any significant change, create a PRD/Spec.
2. **Incremental Implementation**: Thin vertical slices. Implement, test, verify, commit.
3. **Beyonce Rule**: "If you liked it, then you should have put a test on it."
4. **Chesterton's Fence**: Don't remove code unless you understand why it was there in the first place.

## Anti-Rationalization

- Do not say "I'll add tests later". Tests are part of the "Done" definition.
- Do not make massive PRs. Keep changes under 100 lines when possible.
- Do not skip the planning phase for complex tasks.

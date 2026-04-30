# 🔬 HexAtom AI Lab: Operations Manual

Welcome to the command center. This manual provides protocols for managing 6+ concurrent agents and building high-scale AI tools.

## 🤖 Multi-Agent Orchestration Tips

When working with multiple agents (e.g., Antigravity, Claude, Codex, etc.) in this workspace:

1. **Role Specialization**: Assign specific tasks to different agents. 
   - *Agent A (Architect)*: Manages `SPEC.md` and `PLAN.md`.
   - *Agent B (Builder)*: Focuses on component implementation.
   - *Agent C (QA)*: Runs tests and security audits.
2. **Shared State (The Graph)**: Always run `/graphify .` before a new agent joins the session. This ensures all agents have the same mental map of the codebase.
3. **Instruction Injection**: Use `.agent/rules/` for global rules and `AGENTS.md` for project-specific steering.
4. **Context Management**: Avoid dumping massive files. Use `graphify query` to feed agents only the relevant sub-graphs.

## 🎓 Training Your Agents

To "train" or align an agent to your project style:

- **Reference Examples**: Point the agent to `AI-Lab-Skills/ui-ux-pro-max-skill/examples/` for design patterns.
- **Source-Cited Learning**: Instruct agents to use `source-driven-development` skill to ground their logic in the official docs found in `AI-Lab-Skills/`.
- **Anti-Pattern Feedback**: If an agent makes a mistake, add it to the `Anti-Patterns` section of your `.agent/rules/*.md` files.

## 🛠️ God Mode: Building SaaS & AI Tools

- **UI/UX**: Always use the `uipro init` command to bootstrap new frontends.
- **Backend**: Use contract-first design via `/spec`. Define the API before writing the logic.
- **AI Tools**: Leverage the `GenAI_Agents` skills in `AI-Lab-Skills/` to implement RAG, Tool-use, and Chain-of-Thought patterns.

## ⚡ The Mega-Skill Registry (1,400+ Modules)

Your lab is now equipped with the world's largest collection of agentic skills located in `AI-Lab-Skills/antigravity-awesome-skills/skills`.

### 🔎 How to Find & Use a Specific Skill
When you need a specialized capability (e.g., "AWS Cost Optimizer" or "Next.js Best Practices"):

1. **Search**: Run `ls AI-Lab-Skills/antigravity-awesome-skills/skills | grep <keyword>`.
2. **Read**: View the `SKILL.md` or `README.md` inside that folder.
3. **Trigger**: Instruct your agent: *"Use the skill in AI-Lab-Skills/antigravity-awesome-skills/skills/<skill-name> to perform this task."*

### 🏆 Top 10 Power Categories
Use these categories to guide your agents during high-level planning:

1. **AI Engineering**: Use for SDLC, code audits, and tech debt management.
2. **Autonomous Patterns**: Use for multi-agent brainstorming and complex task loops.
3. **UI/UX Intelligence**: Use for high-end design reasoning and 3D web experiences.
4. **Red-Team Security**: Use for penetration testing and security hardening.
5. **Data & ML Pipelines**: Use for automated data science and ML-ops.
6. **SaaS Launcher**: Use for rapid MVP deployment and monetization strategy.
7. **Knowledge Graph**: Use for extracting rationale from existing codebases.
8. **Product Management**: Use for user research and roadmap planning.
9. **Agentic SEO**: Use for LLM-first content strategy and authority building.
10. **Cloud Automation**: Use for Infrastructure-as-Code (Terraform/AWS) tasks.

## 💡 Pro Tips & Tricks

- **The /graphify Pre-hook**: Install the `graphify` hook (`graphify hook install`) to keep the map updated automatically on every commit.
- **Skill Chaining**: You can combine skills. For example, use `saas-mvp-launcher` + `agentic-seo-skill` to build and market a product in one session.
- **Design System Persistence**: Use `python3 search.py --persist` in the UI/UX skill to save design tokens to `design-system/MASTER.md`.

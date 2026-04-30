# Graphify Rules

This project utilizes knowledge graph intelligence from [safishamsi/graphify](https://github.com/safishamsi/graphify).

## Knowledge Graph Principles

1. **Structure Over Search**: Read `graphify-out/GRAPH_REPORT.md` to understand the codebase structure and "god nodes" before deep diving into files.
2. **Context Compression**: Use the graph to find relationships and design rationale that aren't obvious through simple keyword search.
3. **Multimodal Extraction**: When processing documents, videos, or images, use Graphify to extract concepts and link them to the codebase.

## Workflow

- **Initialize**: Run `/graphify .` on new directories to build a map.
- **Update**: Run `/graphify --update` after significant changes to maintain graph integrity.
- **Query**: Use `graphify query` for tracing complex flows (e.g., "how does auth connect to the database?").

## Key Outputs

- `graph.html`: Interactive visualization for human review.
- `GRAPH_REPORT.md`: Strategic overview for agents.
- `graph.json`: Structured data for complex querying.

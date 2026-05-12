# Trickle AI - Phase 2 (Vision Board Mind Map Application)

## High-Level Overview
Trickle AI Phase 2 transforms the application into the world's first **Unified Creative Intelligence Workspace**. It replaces the fragmented experience of using multiple tools by offering a single application that serves simultaneously as:
- A Vision Board
- A Mind Map Engine
- A Daily Life Planner
- A Memory Journal
- A Developer Diagram Tool
- A Multimedia Scrapbook

All of these operate on a true "infinite canvas" featuring no artificial feature walls.

## Technology Stack
- **Frontend Framework**: React 18
- **Canvas Engine**: Fabric.js (v5.3.1, extended with custom classes for Smart Nodes, virtual canvas, and culling)
- **Styling**: TailwindCSS (CDN), custom CSS variables for themes (Glassmorphism design)
- **Icons & Fonts**: Font Awesome 6, Google Fonts (via CSS import)
- **Persistence**: IndexedDB (via `idb` library for robust client-side storage), localStorage
- **Media Handling**: Client-side Canvas API for image compression
- **Specialized Integrations**:
  - CodeMirror 6 (via CDN) for Code Block syntax highlighting
  - PDF.js (via CDN) for PDF previews
  - Rough.js (via CDN) for organic/hand-drawn style connectors
  - Unsplash API for integrated stock photos
  - Giphy API for integrated GIF search
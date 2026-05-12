# Trickle AI - Product Requirements Document (PRD)
## Phase 2 Ultra Upgrade: Vision Board & Mind Map Application

### 1. Objective
Build a Unified Creative Intelligence Workspace that combines an infinite canvas with personal planning, memory journaling, and professional technical mapping.

### 2. Core Features & Requirements

#### 2.1 Infinite Canvas Architecture
- **Scale:** Minimum virtual coordinate space of 100,000 x 100,000 pixels.
- **Navigation:** Zoom (10% to 800%) via pinch/Ctrl+scroll. Minimap navigator for bird's eye view and quick jump. Pan via Space+drag.
- **Performance:** Implement viewport culling (only render objects in viewport + 200px buffer). Cache static objects (`objectCaching: true`). Target 60 FPS.
- **Organization:** Named sections/zones (colored borders/labels) to group canvas areas.

#### 2.2 Dual-Mode Workspace
- **Life Canvas Mode:** Warm, aesthetic UI. Focus on vision boards, journaling, habit tracking, and memories.
- **Flow Map Mode:** Clean, technical UI. Focus on flowcharts, architecture, Kanban, API docs, and code.
- **Toggle:** Instant animated switch between modes (UI changes, canvas objects remain).

#### 2.3 Smart Node System
- **Nodes:** Every canvas object is a Smart Node.
- **Connections:** Four connection points per node. Drag to connect nodes. Support straight, bezier, elbow, and animated line styles. Connectors route around shapes (in Flow mode).
- **Node Content Panel:** Double-click opens a panel containing: Visual Content, Rich Text Notes, Checkbox Tasks, File/URL Links, Media Attachments, History log.
- **Grouping:** Select multiple nodes to group (Ctrl+G), collapse/expand.

#### 2.4 Daily Planner & Habit Tracker
- **Daily Planner Card:** Date, "Most Important Tasks" checkboxes, hourly time block grid (6 AM-12 AM), mood selector, habit quick-track. Animation on task completion.
- **Habit Tracker Widget:** 30-day/7-day grid, tap to mark complete, streak counter, customizable icon/color/frequency.
- **Templates:** Weekly Planning Canvas, Monthly Review Card.

#### 2.5 Memory Maker & Scrapbook
- **Card Types:** Photo Memory, Video Memory (upload/embed), Journal Entry (rich text), Voice Note, PDF Document, Meme/GIF (text overlays).
- **Sticker System:** 200+ built-in stickers, custom upload support. Placed as overlays with rotation/scale/opacity.

#### 2.6 Flowchart & Mind Map Engine
- **Mind Map Auto-Layout:** Press "M" to auto-arrange child nodes radially/hierarchically.
- **Shape Library:** Full suite of flowchart symbols, API Endpoint Cards, Component/Architecture Boxes.
- **Code Block Node:** Monaco/CodeMirror code editor with syntax highlighting for common languages.

#### 2.7 Asset Management & Search
- **Media Library Panel:** Manage Photos, Videos, Audio, GIFs, PDFs, Stickers, Icons.
- **Integrations:** Search Unsplash (photos) and Giphy (GIFs) directly. Built-in 500+ SVG icon library.
- **Search System:** Global client-side full-text search across all node content. Filter by object type. Tagging system with tag cloud.

#### 2.8 Templates
- Categories: Life Planning, Professional, Developer, Education, Memory & Scrapbook. Instantly loadable and editable.

#### 2.9 Data Management & Sharing
- **Persistence:** Debounced auto-save (500ms) to IndexedDB (large data) and localStorage (metadata). No data loss.
- **Version History:** Up to 50 snapshots, viewable and restorable.
- **Export:** Export canvas/sections as PNG, PDF, JSON, SVG. Export specific social media sizes (1080x1080, etc.).
- **Sharing:** Generate read-only links for the canvas.

### 3. Non-Functional Requirements
- Client-side heavy operations (image compression, export rendering).
- Fully responsive and performant on mid-range devices.
- Keyboard accessible with a comprehensive shortcut system.
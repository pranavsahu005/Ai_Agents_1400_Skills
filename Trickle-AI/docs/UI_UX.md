# Trickle AI - UI/UX Design System Specification

## 1. Design Language: Glassmorphism
The overarching design language uses frosted glass aesthetics to give a depth-layered, modern, and premium feel.
- **Panels/Modals:** Semi-transparent backgrounds with backdrop blur.
- **Corners:** 16px radius for large panels/cards, 8px radius for buttons/inputs.
- **Shadows:** Soft, diffused box-shadows to separate layers from the infinite canvas background.
- **Toolbar:** A floating glass "pill" shape positioned at the bottom center.

## 2. Core Themes
Users can select from 6 built-in themes that apply to all UI chrome (panels, toolbars) without overriding user-set canvas backgrounds.
1. **Aurora (Default Premium):** Dark background with subtle purple/teal accent glows.
2. **Daylight:** Light beige/white with warm amber accents.
3. **Ocean:** Deep navy with cyan highlights.
4. **Forest:** Dark green tones, natural aesthetic.
5. **Monochrome:** Pure black/white/gray for a professional, distraction-free environment.
6. **Candy:** Bright pink/purple/yellow accents for playful, personal vision boards.

## 3. Typography
Fonts are loaded via Google Fonts CDN, organized into categories for user selection within text nodes:
- **Display/Heading:** Outfit (Default for UI headings), Playfair Display, Bebas Neue.
- **Body/Reading:** Inter (Default UI text), Roboto, Open Sans.
- **Handwriting/Script:** Caveat, Pacifico, Dancing Script (For memory/journal cards).
- **Monospace:** Fira Code, Roboto Mono (For code blocks).

## 4. Animation & Micro-interactions
Transitions must feel fluid, utilizing spring physics where applicable.
- **Node Creation:** Pop-in scale effect (0.8 -> 1.0) with subtle bounce.
- **Node Deletion:** Dissolve and shrink.
- **Connections:** Subtle animated dash for drawing; optional flowing animation for data transfer.
- **Task/Habit Completion:** Satisfying confetti particle burst (canvas-based).
- **Drag Reorder:** Smooth interpolated position transitions.
- **Mode Switching:** Full-screen ripple transition emanating from the switch toggle.

## 5. UI Layout Maps

### Floating Toolbar (Life Canvas Mode)
Pill-shaped, containing: Select, Media Picker, Text, Journal, Habit, Planner, Stickers, GIF, Draw, Connect, Shapes, Background, Erase, Overflow Menu.

### Floating Toolbar (Flow Map Mode)
Pill-shaped, containing: Select, Process, Decision, Start/End, I/O, Database, Document, Cloud, Text Label, Code Block, Connect, Swimlanes, API Card, Component Box, Sticky Note, Overflow Menu.
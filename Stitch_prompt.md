# System Role
You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to build a high-fidelity React prototype using Tailwind CSS.

# Objective
Create a Personal Portfolio Website prototype based on a specific content structure and a strict "Industrial Skeuomorphism" design system. 

# Content & Layout Structure (Multi-Page Routing)

**1. Top Navigation**
- Position: Fixed at the top of the page across all routes.
- Links: Home (`/`), Portfolio (`/portfolio`), About Me (`/about`).
- Interaction: Clicking links should navigate to separate pages using a client-side router (e.g., React Router). Include an active state for the current route (e.g., an inset shadow or glowing LED indicator).

**2. Home Page (`/`)**
- Elements: 
  - User Name
  - Avatar (PLACEHOLDER ONLY - see constraints)
  - Core Competencies / Headline

**3. Portfolio Page (`/portfolio`)**
- Elements: A grid or list of project cards.
- Each project card must include:
  - Project Name
  - Result Image (PLACEHOLDER ONLY - see constraints)
  - Key Metrics (use technical monospace typography)
  - Result Description

**4. About Me Page (`/about`)**
- Elements:
  - Avatar (PLACEHOLDER ONLY)
  - Core Competencies summary
  - Skill Tree (visualize using mechanical progress bars, LED indicators, or modular blocks)
  - Project Experience (timeline or bolted module layout)
  - Contact Information
  - "Contact Me" Call-to-Action Button

# Technical & Design Constraints
- **NO REAL IMAGES**: Do NOT use any `<img>` tags with actual people or project screenshots. Instead, build CSS-only skeuomorphic placeholders. For example, an avatar placeholder could be a recessed mechanical groove or a blank CRT screen with CSS scanlines. A project image placeholder could be a bolted metal plate or a digital display panel.
- **Icons**: Use `lucide-react` exclusively. Follow the design system's rules for icon housing (e.g., recessed housings or LED styles).
- **Styling**: Use Tailwind CSS. Implement the complex shadows, gradients, and mechanical interactions strictly using Tailwind utility classes or arbitrary values.

---

# Design System: Industrial Skeuomorphism

Please strictly adhere to the following design system for all visual and interactive elements.

## 1. Design Philosophy
This style transcends simple skeuomorphism into **Industrial Realism**—a celebration of tactile precision, mechanical reliability, and the soul of physical objects.
- **Physicality Through Light**: Every element exists in 3D space defined by consistent top-left lighting (45 degrees).
- **Mechanical Authenticity**: Interactions mimic real-world physics. Buttons depress with translation and shadow inversion.
- **Manufacturing Details**: Include corner screws (radial gradients), ventilation slots, LED status indicators, scanlines, and push-pin shadows.

## 2. Design Token System
**Colors (Strictly Light Mode)**:
- Background (Chassis): `#e0e5ec` (Level 0)
- Foreground (Panel): `#f0f2f5` (Level +1)
- Muted (Recessed): `#d1d9e6` (Level -1)
- Text (Primary): `#2d3436`
- Text Muted (Labels): `#4a5568`
- Accent (Safety Orange): `#ff4757` (Use sparingly for interactive triggers, LEDs, critical buttons)
- Accent Foreground: `#ffffff`
- Border (Shadow): `#babecc`
- Border Light (Highlight): `#ffffff`

**Typography**:
- Primary: **Inter** (Humanist sans-serif for body, headings, UI labels).
- Technical: **JetBrains Mono** or **Roboto Mono** (For metrics, technical labels, small uppercase metadata, input fields).
- Text Shadows: Use `drop-shadow-[0_1px_0_#ffffff]` for dark text on light backgrounds to create an embossed effect.

**Neumorphic Shadow System (Crucial)**:
- Card (Base Lift): `shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]`
- Floating (High Elevation): `shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff]`
- Pressed (Active): `shadow-[inset_6px_6px_12px_#babecc,inset_-6px_-6px_12px_#ffffff]`
- Recessed (Inputs/Screens/Placeholders): `shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff]`
- Glow (LED): `shadow-[0_0_10px_2px_rgba(255,71,87,0.6)]`

## 3. Component Stylings
**Buttons ("Physical Keys")**:
- Primary: Background `#ff4757`, white text, uppercase, wide tracking. Neumorphic red-tinted shadows.
- Secondary: Background `#e0e5ec`, dark text, base lift shadow.
- Interaction: On `:active`, `translate-y-[2px]` and invert shadow to inset.

**Cards ("Bolted Modules")**:
- Base shadow, `rounded-lg` (16px), background `#e0e5ec`.
- **Must include manufacturing details**: CSS radial gradients for corner screws (12px from edges), or recessed vent slots in the corners.
- Hover: `-translate-y-1` with shadow upgrade to Floating.

**Placeholders (Screens/Inputs)**:
- Deeply inset shadow, no visible border.
- For screens (avatar/project placeholders), use a dark background (`#2d3436`) with CRT scanlines: `bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]`.

## 4. Layout & Animation
- **Grid Discipline**: Use precise Tailwind grids (`grid-cols-2`, `grid-cols-3`). Elements should feel "mounted" to a chassis.
- **Motion**: Mechanical spring physics. Fast interactions (150ms) for buttons, smooth (300ms) for card hovers.
- **LED Indicators**: Use small circular divs with `animate-pulse` and glow shadows to indicate status (e.g., "ONLINE" next to the avatar).

Build the complete React component structure reflecting these rules. Ensure the code is modular, uses Tailwind heavily for the skeuomorphic effects, and perfectly captures the "Industrial Realism" vibe without relying on external image assets.
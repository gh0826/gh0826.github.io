You are a UI/UX prototyping assistant. Generate a multi-page personal website prototype (paged screens) based on the following site-structure fields and in the provided organic / natural design style.

## Required Site Pages (Pagination)
Create 5 distinct screens (page 1 to page 5). Keep the same global navigation + footer style across all pages, and make each page visually coherent with the same design system.

1) Page 1 — Home
   - Overall information:
     - Website type: Personal homepage
     - Core purpose: Showcase projects and provide a way to contact the owner
   - Hero / Header content:
     - Large headline: “{Name}”
     - Subheadline / title: “{Job Title}” (e.g., Frontend Developer)
     - One-line positioning / welcoming statement (use a short tagline placeholder)
     - Primary CTA button: “View Work”
     - Secondary CTA button: “Contact Me”
   - Core highlights block (3 feature items):
     - “About me”, “Experience & Skills”, “Projects & Writing” (use placeholders)
   - Quick action row (optional, but keep it simple):
     - Buttons or pill links to “Projects”, “Blog”, “Resume (PDF)”
   - Organic section separators:
     - Use softly-blurred blob shapes and asymmetric card radii behind or between sections.

2) Page 2 — Personal Profile (About)
   - Personal card:
     - Avatar image placeholder (circle or organic mask)
     - Brief intro paragraph + personal story snippet
     - Highlight tags (chips) such as “Open-source”, “Frontend”, “UI/UX”, “Performance”
     - Optional honors / certification badges (small, contained chips/cards)
   - Experience timeline:
     - Vertical timeline with date ranges and role blocks
     - Each role includes: responsibilities + 1–2 quantified outcomes (placeholders)
   - Professional skills:
     - Skills grouped by category (e.g., Frontend, UI/UX, Tooling)
     - Each category shows a grid of skill chips OR bars indicating proficiency
     - Include an “Interests” mini-section (optional) with 3 small chips.

3) Page 3 — Projects / Portfolio
   - Section header:
     - Title: “Projects”
     - Short description about what kind of work is showcased
   - Project grid (cards):
     - 6 project cards in a responsive grid (2 columns on tablet, 3 on desktop)
     - Each card includes:
       - Project name
       - Tech stack tags
       - Role (e.g., Frontend / UI/UX / Full-stack) as a small label
       - A “View details” link or button
     - Cards should use organic asymmetric border radius and moss-tinted shadows.
   - Optional filtering row (chips):
     - Chips like “All”, “Frontend”, “UI/UX”, “Writing”
     - Keep the UI subtle (no heavy controls).

4) Page 4 — Writing / Blog (and Public Account)
   - Blog list:
     - Show 6 article cards with:
       - Title
       - Category tag(s)
       - Short excerpt
       - “Read” link / button
     - Add a “Featured” small highlight area at the top.
   - Public account section (QR):
     - A card with:
       - QR code placeholder
       - Text: “Follow for updates”
       - Link to newsletter / follow button

5) Page 5 — Contact
   - Contact form:
     - Fields: Name, Email, Message
     - Submit button: “Send Message”
     - Include inline helper text and placeholder validation styles (visual only)
   - Social links & resources card:
     - Social icons/links placeholders (e.g., GitHub, LinkedIn, email)
     - Resume download button: “Download Resume (PDF)”
   - Footer:
     - Copyright
     - “Tech stack” line (placeholder)
     - “Last updated: {date}”
   - Keep page layout clean and calming with generous whitespace.

## Global Layout & Components
Across all pages:
 - Top navigation:
   - Sticky floating pill nav near the top (centered or slightly offset)
   - Glassmorphism frosted effect (white/70 + backdrop blur)
   - Soft timber border
   - Menu links: Home, About, Projects, Blog, Contact
   - Mobile behavior: hamburger menu that opens an organic rounded dropdown/panel
 - Footer:
   - Soft background, timber border, rounded corners
   - Reuse the same typography and colors.
 - Responsive rules:
   - Mobile-first: single column; large touch targets; blobs simplified (still present but less aggressive)
   - md+: grids transition to 2–3 columns; hero text scales up.

## Design Style (Must Follow)
Organic / Natural with wabi-sabi warmth:
 - Reject sharp 90-degree angles; prefer eroded-by-nature shapes
 - Use soft, amorphous blob forms and varied organic border radii
 - Add paper-like grain/noise texture overlay at 3–5% opacity with `mix-blend-mode: multiply`
 - Use subtle, diffused shadows tinted with moss green / clay orange (never pure black)
 - Shadows should feel moss-tinted and diffused (example target):
   - Default card/container shadow: `0 4px 20px -2px rgba(93,112,82,0.15)`
   - Floating shadow for lift/hover: `0 10px 40px -10px rgba(193,140,93,0.2)`
 - Button hover micro-interactions:
   - Primary: gentle scale-up and deeper moss shadow (e.g. `hover:scale-105` + `0 6px 24px -4px rgba(93,112,82,0.25)`)
   - Active: tactile press (e.g. `active:scale-95`)
 - Use asymmetric card radii to avoid mechanical uniformity
 - Gentle interactions:
   - Buttons: hover scale up slightly + soft shadow deepening
   - Cards: hover lift (-translate-y) and subtle tilt or micro-rotation
 - Asymmetry:
   - Slightly rotated image frames (optional), offset elements, varied card shapes.

## Palette & Typography Tokens (Light Mode)
Colors:
 - background: #FDFCF8
 - foreground: #2C2C24
 - primary: #5D7052 (moss green)
 - secondary: #C18C5D (terracotta/clay)
 - accent: #E6DCCD (sand/beige)
 - muted: #F0EBE5
 - border: #DED8CF (raw timber)
 - destructive: #A85448 (burnt sienna)

Typography:
 - Headings: Fraunces (serif, warm character; weights 600–800)
 - Body: Nunito (rounded sans; friendly terminals)
 - Scale: moderate (avoid aggressive/techno typography)

Radius & Shapes:
 - Standard: rounded-2xl (16px) / rounded-3xl (24px)
 - Organic blobs: use complex border-radius ratios like:
   - `60% 40% 30% 70% / 60% 30% 70% 40%`
   - Also vary corner radii per card to create handcrafted feel.

Buttons:
 - Fully rounded pills (`rounded-full`)
 - Primary button: moss green background, pale mist text, moss-tinted soft shadow
 - Outline button: 2px terracotta border with terracotta text
 - Hover: gentle scale-up, deeper moss shadow

Cards / Containers:
 - Nearly-white beige surface (#FEFEFA on top of off-white)
 - Timber border at ~50% opacity (#DED8CF/50)
 - Moss-tinted soft shadow
 - Noise overlay layer at ~3% opacity on major content containers.

## Required Visual Output Format
 - Produce one “paginatable” design set with 5 labeled screens (Page 1–Page 5).
 - For each page, show:
   - Global nav
   - Main content layout for that page
   - Footer
 - Include placeholders for dynamic personal data:
   - {Name}, {Job Title}, {date}, and generic image/avatar/QR placeholders.
 - Keep the design consistent across pages with the same style tokens.

## Accessibility & UI Polish (Prototype Level)
 - Use semantic structure and readable contrast (foreground #2C2C24 on background #FDFCF8).
 - Inputs (on the Contact page) must have clearly visible focus rings:
   - focus-visible ring: `ring-2` style using `#5D7052` at ~30% opacity + a soft ring offset feel.
 - Maintain generous whitespace and touch-friendly tap targets in the prototype.

## Content Placeholders (Use These)
 - Avatar: a placeholder portrait in organic mask
 - Projects: “Project A…F” with varied tech stack tags
 - Articles: “Post 1…6” with category tags like UI/Frontend/Notes
 - Social links: GitHub, Email, LinkedIn placeholders
 - Resume: PDF download button placeholder

## Final Constraint
All screens must feel warm, handcrafted, calming, and slightly imperfect (wabi-sabi). Avoid generic “template” aesthetics and avoid sharp corners or harsh contrast.


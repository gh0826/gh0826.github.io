# Design System Specification: The Living Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Wabi-Sabi Curator"**
This design system rejects the clinical coldness of modern SaaS in favor of a "Wabi-Sabi" warmth—finding beauty in imperfection, organic growth, and tactile depth. It is a high-end editorial experience that prioritizes the "human touch." 

By utilizing intentional asymmetry, paper-like textures, and moss-tinted shadows, we break the "template" look. We move away from rigid 90-degree grids to create a layout that feels grown, not built. This is a digital space that breathes, using expansive white space and tonal layering to guide the eye with the gentleness of a physical gallery.

---

## 2. Colors & Atmospheric Tones
The palette is rooted in the earth. It uses mossy greens, sun-baked terracotta, and raw timber to establish a sense of grounded permanence.

### Core Palette
*   **Surface (Background):** `#FDFCF8` (The canvas of aged parchment)
*   **On-Surface (Foreground):** `#2C2C24` (Deep charred oak)
*   **Primary:** `#5D7052` (Moss green — use for growth and primary actions)
*   **Secondary:** `#C18C5D` (Terracotta — use for warmth and supporting elements)
*   **Accent:** `#E6DCCD` (Sand — use for subtle highlights)
*   **Destructive:** `#A85448` (Dried clay — for errors and warnings)

### The "No-Line" Rule
Standard 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined through **Background Color Shifts** (e.g., a `surface-container-low` section sitting on a `surface` background) or through the **Ghost Border Fallback**.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine handmade paper.
*   **Base:** `surface` (#FDFCF8)
*   **Sunken Elements:** `surface-container-low` (#F9F3E9) for background utility areas.
*   **Elevated Elements:** `surface-container-highest` (#E8E2D9) for cards and prominent interactive containers.
*   **Nesting:** When placing an element inside a card, do not use a border. Shift the background tone one step higher or lower to create "inset" depth.

### Signature Textures & Glass
*   **Paper Grain:** Every layout must include a 3-5% noise overlay (`mix-blend-mode: multiply`) to eliminate digital flatness.
*   **Glassmorphism:** For floating navigation or modals, use semi-transparent surface colors with a `backdrop-blur-md` effect. This allows the organic colors behind to bleed through, softening the interface.

---

## 3. Typography
The typography is a dialogue between the tactile history of the serif and the approachable nature of the rounded sans.

| Level | Token | Font | Weight | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Fraunces | 800 | Soft-Ink, High Contrast |
| **Headline** | `headline-md` | Fraunces | 600 | Editorial, Authoritative |
| **Title** | `title-lg` | Nunito | 700 | Grounded, Friendly |
| **Body** | `body-md` | Nunito | 400 | Highly Readable, Soft |
| **Label** | `label-sm` | Nunito | 600 | All-caps, tracked out (+0.05em) |

**Editorial Intent:** Use `display-lg` with tight letter spacing for hero sections. Headlines should feel "heavy" to anchor the organic layouts, while body text provides significant breathing room (line-height: 1.6) to mimic high-end print magazines.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** and environmental lighting rather than artificial drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a natural "lift."
*   **Moss-Tinted Shadows:** When an element must float (e.g., a primary button or modal), use a diffused, tinted shadow: `0 10px 30px -5px rgba(93, 112, 82, 0.12)`. Avoid grey shadows; they feel "dirty" in this organic context.
*   **The "Ghost Border":** If a border is required for accessibility, use the `border` token (`#DED8CF`) at 30% opacity. 100% opaque borders are forbidden.
*   **Asymmetric Radii:** Reject the "perfect" circle or square. For containers, use `60% 40% 30% 70% / 60% 30% 70% 40%`. This "pebble" shape makes the UI feel hand-sculpted.

---

## 5. Components

### Buttons
*   **Primary:** Fully rounded pills using the `primary` (Moss) fill. 
*   **Interaction:** On hover, apply a `scale(1.03)` transform and deepen the moss-tinted shadow.
*   **Secondary:** Ghost style with a `secondary` (Terracotta) ghost-border and matching text.

### Cards & Containers
*   **Visual Rule:** Forbid the use of divider lines. 
*   **Structure:** Use vertical white space (Token `12` or `16`) to separate content. All cards must feature a subtle `border` (#DED8CF) at low opacity to mimic the edge of a timber frame.

### Inputs & Forms
*   **Shape:** `rounded-2xl` (#md).
*   **Focus State:** Shift the background from `surface` to `surface-bright` and introduce a 2px `primary` (Moss) soft glow. Do not use high-contrast rings.

### Navigation (The Floating Dock)
*   **Design:** Use a pill-shaped container with `backdrop-blur-xl` and a 5% paper grain. It should appear to float over the content like a leaf on water.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. A layout that is slightly "off-center" feels more intentional and high-end.
*   **Do** lean into the "Pebble" aesthetic. If a component can be rounded or slightly irregular, it should be.
*   **Do** use the Spacing Scale religiously. Large gaps (Token `20` and `24`) are your best friend for creating luxury.

### Don’t
*   **Don’t** use pure black (#000) or pure white (#FFF). They break the Wabi-Sabi warmth.
*   **Don’t** use sharp corners. A 90-degree angle is a failure of the design language.
*   **Don’t** use standard "drop shadows." If it doesn't have a mossy green tint, it doesn't belong in this system.
*   **Don’t** use dividers. If you can’t separate elements with white space or a color shift, rethink the information architecture.

---

## 7. Spacing & Rhythm
This system uses a custom scale to ensure a relaxed, breathable rhythm.

*   **Micro (0.5 - 2):** For internal padding of buttons and chips.
*   **Section (8 - 12):** For padding within cards and group containers.
*   **Breath (16 - 24):** For margins between major sections and hero elements. 

*Director's Note: If the layout feels "busy," double the spacing. Luxury is defined by the space you choose not to fill.*
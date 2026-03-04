# Rena Aesthetic Lab — Website Branding Document

> Reference guide for all design and development work on the Renaissance waitlist site.
> Combines the official Rena brand kit with layout/UX patterns from Blank Street Coffee (blankstreet.com).

---

## 1. Brand Identity

**Product name:** Rena Aesthetic Lab
**Tagline:** Your personal cosmetic concierge
**Voice:** Minimal · Chic · Modern Femininity
**Tone:** Warm but editorial. Confident but never clinical. Aspirational but approachable.

The logo mark is a system of **concentric circles** — representing nurturing, protection, and the layered nature of aesthetic care. The wordmark pairs a light-weight serif with a spaced-caps sans label.

---

## 2. Color Palette

All CSS custom properties live in `src/index.css`. Use only these tokens — never raw hex in components.

| Token name         | Hex       | Role                                     |
|--------------------|-----------|------------------------------------------|
| `--charcoal-rose`  | `#3D2B2E` | Primary text, dark backgrounds, headings |
| `--mauve-berry`    | `#8E4C5C` | Secondary accent, inner logo circle      |
| `--dusty-rose`     | `#C4929A` | Primary brand accent, buttons, labels    |
| `--rose-gold`      | `#B76E79` | Hover states, gradient mid-stops         |
| `--soft-blush`     | `#F2D7DB` | Section backgrounds, card fills          |
| `--cream`          | `#FFF8F6` | Page background, lightest surface        |
| `--warm-gray`      | `#B8A9AB` | Body copy, muted text, placeholders      |
| `--pale-pink`      | `#FAF0F0` | Alternate section background             |

### Gradient Recipes

```css
/* Hero background gradient */
background: linear-gradient(160deg, #FFF8F6 0%, #F2D7DB 50%, #FAF0F0 100%);

/* CTA button hover */
background: linear-gradient(135deg, #C4929A, #8E4C5C);

/* Dark card / footer */
background: linear-gradient(135deg, #3D2B2E, #5A3D42);

/* Decorative accent text */
background: linear-gradient(135deg, #C4929A, #8E4C5C);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Color Do's and Don'ts
- **Do** layer dusty-rose text or accents on cream/pale-pink backgrounds
- **Do** use charcoal-rose text on white/cream surfaces
- **Do** use the white logo variant on charcoal-rose or mauve-berry backgrounds
- **Don't** use off-brand colors (no generic `gray-500`, no pure black `#000`)
- **Don't** place dusty-rose text on soft-blush backgrounds (insufficient contrast)

---

## 3. Typography

Import via Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500;600&display=swap" rel="stylesheet">
```

### Font Stack

| Role      | Family              | Weights used     | Notes                            |
|-----------|---------------------|------------------|----------------------------------|
| Heading   | Cormorant Garamond  | 300, 400, 500    | Serif · elegant · high contrast  |
| Body/UI   | Outfit              | 200, 300, 400, 500, 600 | Geometric sans · warm · clean |

### Type Scale

| Level     | Font               | Size (desktop)  | Weight | Tracking        |
|-----------|--------------------|-----------------|--------|-----------------|
| Display   | Cormorant Garamond | 64–96px         | 300    | -0.5px          |
| H1        | Cormorant Garamond | 48–56px         | 300–400| -0.5px          |
| H2        | Cormorant Garamond | 32–42px         | 400    | normal          |
| H3        | Cormorant Garamond | 24px            | 500    | normal          |
| H4 / UI   | Outfit             | 18px            | 400    | normal          |
| Body      | Outfit             | 15px            | 300    | 0.5px · line-height 1.8 |
| Small     | Outfit             | 13px            | 300    | normal          |
| Label     | Outfit             | 11px            | 500    | 4px · uppercase |
| Caption   | Outfit             | 10px            | 400    | 2px · uppercase |

### Typography Rules
- Headlines should feel **light and expansive** — prefer `font-weight: 300` for Cormorant at large sizes
- Labels and eyebrow text always use `text-transform: uppercase` with `letter-spacing: 3–4px`
- Body text uses `line-height: 1.8` for readability and to maintain an airy feel
- Italic Cormorant Garamond can be used sparingly for emphasis or decorative pull quotes

---

## 4. Spacing System

Borrowed from Blank Street's structured grid approach. Use multiples of 8px.

| Token      | Value   | Use                              |
|------------|---------|----------------------------------|
| `space-1`  | 8px     | Micro gaps (icon padding)        |
| `space-2`  | 16px    | Component internal padding       |
| `space-3`  | 24px    | Card padding, input height       |
| `space-4`  | 32px    | Between related elements         |
| `space-6`  | 48px    | Section internal top/bottom pad  |
| `space-8`  | 64px    | Between major content blocks     |
| `space-12` | 96px    | Section vertical padding         |
| `space-16` | 128px   | Hero / large section gaps        |

**Section vertical padding:** `py-24` (96px) at minimum; hero sections use `min-h-screen`.
**Container max-width:** 1100px centered, with `px-4` (mobile) → `px-8` (desktop) side padding.

---

## 5. Layout & Grid

Inspired by Blank Street's 12-column fluid grid.

- **Desktop:** 12-column grid, 40px gutters, max-width 1400px
- **Tablet:** 8-column, 20px gutters
- **Mobile:** single column, 16px side padding

### Section Templates

**Full-bleed hero:**
```
[full viewport] background gradient + decorative circles
  centered content: label · H1 · body · CTA form
```

**2-column split:**
```
[left 5 cols] text block (label · heading · body · link)
[right 7 cols] image or UI mockup
```

**3-column card grid:**
```
centered heading block (full width)
[col 1] [col 2] [col 3] — equal cards, 32px gap
```

**Full-width statement:**
```
centered oversized Cormorant text (Display size)
optional italic sub-line in dusty-rose
```

---

## 6. UI Components

### Navigation (Sticky Header)
- Transparent on load, transitions to `background: rgba(255,248,246,0.95)` + `backdrop-blur` on scroll
- Logo on the left, nav links center or right
- CTA button (pill) on far right: "Join Waitlist"
- Mobile: hamburger → full-screen overlay in charcoal-rose with white links

### Buttons

| Variant    | Style                                                        |
|------------|--------------------------------------------------------------|
| Primary    | `bg: #C4929A`, `text: white`, pill-shape (`border-radius: 50px`), `padding: 12px 32px` |
| Primary Dark | `bg: #3D2B2E`, `text: white`, same pill shape            |
| Ghost      | `border: 1px solid #C4929A`, `text: #C4929A`, transparent bg |
| Text link  | No bg/border, underline on hover, `color: #C4929A`          |

All buttons: `font-family: Outfit`, `font-weight: 500`, `letter-spacing: 1px`, `font-size: 13px`, `text-transform: uppercase`

### Input Fields
```css
border: 1px solid #F2D7DB;
border-radius: 8px;
padding: 12px 16px;
font-family: Outfit, sans-serif;
font-size: 15px;
font-weight: 300;
color: #3D2B2E;
background: #ffffff;
placeholder-color: #B8A9AB;
```
Focus state: `border-color: #C4929A`, `box-shadow: 0 0 0 3px rgba(196,146,154,0.15)`

### Cards
```css
background: #ffffff;
border: 1px solid rgba(196,146,154,0.15);
border-radius: 20px;
padding: 40px;
box-shadow: 0 2px 20px rgba(61,43,46,0.06);
transition: transform 0.3s ease, box-shadow 0.3s ease;
```
Hover: `transform: translateY(-4px)`, `box-shadow: 0 8px 40px rgba(61,43,46,0.10)`

### Section Labels (eyebrow text)
```
font: Outfit 500, 11px, uppercase, letter-spacing: 4px
color: #C4929A (dusty-rose)
margin-bottom: 12px
format: "01 — Section Name"
```

### Decorative Circles
The brand mark pattern — concentric circles — can be used as decorative background elements:
```css
/* Large ambient circle */
position: absolute;
width: 600px; height: 600px;
border-radius: 50%;
border: 1px solid rgba(196,146,154,0.12);
/* Position off-screen edges for subtle depth */
```

### Dividers
```css
width: 60px;
height: 1px;
background: #C4929A;
opacity: 0.4;
margin: 0 auto;
```

---

## 7. Motion & Animation

Borrowed from Blank Street's smooth, purposeful motion language.

| Element          | Animation                                       | Duration  | Easing                     |
|------------------|-------------------------------------------------|-----------|----------------------------|
| Nav bg           | Background color on scroll                      | 0.3s      | ease                       |
| Cards            | translateY(-4px) on hover                       | 0.3s      | ease                       |
| Page entry       | fade-in + translateY(20px → 0)                  | 0.8s      | ease-out                   |
| Button hover     | opacity or bg-color shift                       | 0.2s      | ease                       |
| Mobile menu      | Full-screen overlay slide/fade                  | 0.4s      | cubic-bezier(0.4,0,0.2,1)  |
| Wave decoration  | Gentle horizontal oscillation                   | 8–12s     | ease-in-out infinite       |

No jarring or overly complex animations. Motion should feel like breathing — slow, gentle, intentional.

---

## 8. Imagery & Illustration

- **Photography:** Editorial beauty photography. Warm lighting, cream/rose/blush tones. Close-ups of skin, hands, tools. No stock-photo feel.
- **Aspect ratios:**
  - Hero: 16:9 or full viewport
  - Cards/thumbnails: 4:3 or 1:1 square
  - Split sections: 3:4 portrait
- **Overlay:** Dark hero overlays use `rgba(61,43,46,0.5)` — charcoal-rose tinted, not pure black
- **Decorative SVG:** The concentric-circle logo mark can be used at large opacity-10 scale as watermark backgrounds

---

## 9. Page Sections Reference (Current Site)

### Hero
- Full-screen, background image with charcoal-rose tint overlay
- Animated wave SVGs at bottom (dusty-rose, opacity 20–30%)
- Centered text: H1 Cormorant + body Outfit
- Email + CTA form below headline
- Decorative circles top-right and bottom-left

### Features (Why Choose Rena)
- Section label: `01 — Why Choose Rena`
- H2 heading + body intro
- 3-column card grid with icon + title + description
- Icon background: `rgba(196,146,154,0.15)` pill container
- Icon color: `#8E4C5C` (mauve-berry)

### How It Works
- Numbered steps with large Cormorant numerals in dusty-rose gradient
- Connector lines between steps (desktop only)
- Clean white background

### Footer
- 3-column: logo+tagline | nav links | copyright
- Background: charcoal-rose (`#3D2B2E`)
- Text: white at various opacities

---

## 10. CSS Variable Setup (Target State)

Update `src/index.css` `:root` to match the brand kit:

```css
:root {
  /* Brand Colors */
  --charcoal-rose: 345 17% 20%;    /* #3D2B2E */
  --mauve-berry:   342 30% 43%;    /* #8E4C5C */
  --dusty-rose:    349 28% 67%;    /* #C4929A */
  --rose-gold:     350 30% 57%;    /* #B76E79 */
  --soft-blush:    349 47% 89%;    /* #F2D7DB */
  --cream:         10 100% 100%;   /* #FFF8F6 */
  --warm-gray:     345 10% 69%;    /* #B8A9AB */
  --pale-pink:     0 100% 97%;     /* #FAF0F0 */

  /* Semantic Tokens */
  --background:        var(--cream);
  --foreground:        var(--charcoal-rose);
  --primary:           var(--dusty-rose);
  --primary-foreground: 0 0% 100%;
  --accent:            var(--mauve-berry);
  --muted-foreground:  var(--warm-gray);
  --card:              0 0% 100%;
  --border:            349 47% 89%;  /* soft-blush */

  /* Gradients */
  --gradient-hero:   linear-gradient(160deg, #FFF8F6 0%, #F2D7DB 50%, #FAF0F0 100%);
  --gradient-accent: linear-gradient(135deg, #C4929A, #8E4C5C);
  --gradient-dark:   linear-gradient(135deg, #3D2B2E, #5A3D42);

  /* Shape */
  --radius: 20px;

  /* Shadow */
  --shadow-card:     0 2px 20px rgba(61,43,46,0.06);
  --shadow-hover:    0 8px 40px rgba(61,43,46,0.10);
  --shadow-glow:     0 0 40px rgba(196,146,154,0.20);
}
```

---

## 11. Tailwind Config Additions

```ts
// tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      sans:  ['Outfit', 'system-ui', 'sans-serif'],
    },
    colors: {
      'charcoal-rose': '#3D2B2E',
      'mauve-berry':   '#8E4C5C',
      'dusty-rose':    '#C4929A',
      'rose-gold':     '#B76E79',
      'soft-blush':    '#F2D7DB',
      'cream':         '#FFF8F6',
      'warm-gray':     '#B8A9AB',
      'pale-pink':     '#FAF0F0',
    },
    borderRadius: {
      pill: '50px',
      card: '20px',
    },
  }
}
```

---

## 12. Design References

| Source           | What to borrow                                              |
|------------------|-------------------------------------------------------------|
| Blank Street     | Sticky nav, pill CTAs, section vertical rhythm, grid layout, hover transitions, footer layout |
| Rena Brand Kit   | All colors, both fonts, logo mark, spacing sensibility, editorial tone |
| Brand voice      | Minimal, chic, feminine — never clinical, never loud        |

---

*Last updated: February 2026*

---
title: Styling
description: Learn about the Astro Swiss Theme styling system with design tokens, themes, and Tailwind CSS v4.
---

import { Aside, Tabs, TabItem, Card, CardGrid, Code } from '@astrojs/starlight/components';

Learn about the powerful styling system in Astro Swiss Theme.

## Styling Architecture

The theme uses a layered CSS architecture for maximum flexibility:

```
global.css (entry point)
├── starwind.css        ← Starwind UI component styles
├── tokens.css          ← Design tokens (colors, spacing, shadows)
├── themes/
│   ├── light.css      ← Light mode overrides
│   └── dark.css       ← Dark mode overrides
└── utilities.css       ← Custom utility classes
```

<Aside type="note">
  **Import order matters!** This cascade ensures proper styling hierarchy from base components to custom utilities.
</Aside>

---

## Design Tokens

**File:** `src/styles/tokens.css`

Design tokens are CSS variables that define your brand's visual identity.

### Brand Colors

```css title="src/styles/tokens.css"
:root {
  /* Primary accent color */
  --accent: #fc4a1a;
  --accent-dark: #f7b733;
  --accent-rgb: 252, 74, 26;
  
  /* Secondary color */
  --secondary: #FFB36B;
}
```

**Usage:**
```css
.button {
  background: var(--accent);
  color: var(--primary-foreground);
}
```

### Neutral Colors

Defined as RGB values for flexibility with opacity:

```css
:root {
  --black: 15, 18, 25;
  --gray: 96, 115, 159;
  --gray-light: 229, 233, 240;
  --gray-dark: 34, 41, 57;
}
```

**Usage with opacity:**
```css
.overlay {
  background: rgba(var(--black), 0.5);  /* 50% opacity */
}
```

### Semantic Tokens

Semantic tokens provide meaning-based naming:

```css title="src/styles/tokens.css"
:root {
  /* Text colors */
  --color-text-primary: rgb(var(--black));
  --color-text-secondary: rgb(var(--gray-dark));
  --color-text-muted: rgb(var(--gray));
  
  /* Background colors */
  --color-bg-primary: var(--background);
  --color-bg-secondary: rgba(0, 0, 0, 0.03);
  --color-bg-tertiary: rgba(0, 0, 0, 0.05);
  
  /* Borders */
  --color-border: rgba(0, 0, 0, 0.12);
  --color-border-light: rgba(0, 0, 0, 0.08);
}
```

---

## Theme System

The theme supports automatic light/dark mode switching based on user preference.

![Dark mode toggle](../../../assets/docs/dark-mode-toggle.webp)

### Light Theme

**File:** `src/styles/themes/light.css`

```css title="src/styles/themes/light.css"
[data-theme="light"] {
  --accent: #FF7A1A;
  --background: #ffffff;
  --foreground: #0f1219;
  --card: #ffffff;
  /* ... more overrides */
}
```

### Dark Theme

**File:** `src/styles/themes/dark.css`

```css title="src/styles/themes/dark.css"
[data-theme="dark"],
.dark {
  --accent: #f7b733;
  --background: #050505;
  --foreground: rgb(243, 244, 246);
  --card: rgba(255, 255, 255, 0.04);  /* Translucent */
  /* ... more overrides */
}
```

### Theme Initialization

The `BaseLayout.astro` includes an inline script to prevent FOUC (Flash of Unstyled Content):

```javascript
const isDark =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

document.documentElement.classList.toggle("dark", isDark);
document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
```

This runs before page render to apply the correct theme immediately.

---

## Customizing Colors

### Changing Brand Colors

Edit `src/styles/tokens.css`:

```css title="src/styles/tokens.css"
:root {
  /* Change your primary brand color */
  --accent: #3b82f6;  /* Blue instead of orange */
  --accent-rgb: 59, 130, 246;
  
  /* Change secondary color */
  --secondary: #8b5cf6;  /* Purple */
}
```

### Per-Theme Color Adjustments

For different colors in light vs. dark mode:

<Tabs>
  <TabItem label="Light Theme">
    ```css title="src/styles/themes/light.css"
    [data-theme="light"] {
      --accent: #3b82f6;  /* Bright blue */
    }
    ```
  </TabItem>
  
  <TabItem label="Dark Theme">
    ```css title="src/styles/themes/dark.css"
    [data-theme="dark"] {
      --accent: #60a5fa;  /* Lighter blue for dark backgrounds */
    }
    ```
  </TabItem>
</Tabs>

### Creating Color Variants

Add new color tokens:

```css title="src/styles/tokens.css"
:root {
  --brand-purple: #8b5cf6;
  --brand-green: #10b981;
  --brand-pink: #ec4899;
}
```

Use in components:

```css
.special-button {
  background: var(--brand-purple);
}
```

---

## Typography

### Font Family

**File:** `src/styles/global.css`

The theme uses Poppins font:

```css title="src/styles/global.css"
@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Regular.ttf") format("ttf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 1.7;
}
```

### Changing Fonts

**Example - Using Inter:**

```css title="src/styles/global.css"
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: "Inter", system-ui, sans-serif;
}
```

---

## Shadows & Effects

### Shadow Tokens

Defined in `tokens.css`:

```css title="src/styles/tokens.css"
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 15px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 12px 25px rgba(0, 0, 0, 0.16);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.2);
}
```

Dark mode uses heavier shadows for better depth perception:

```css
[data-theme="dark"] {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.18);
  --shadow-md: 0 6px 14px rgba(0, 0, 0, 0.28);
  --shadow-lg: 0 10px 28px rgba(0, 0, 0, 0.35);
}
```

### Border Radius

```css
:root {
  --radius: 0.75rem;  /* 12px */
}
```

Tailwind also provides radius utilities: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`.

---

## Tailwind CSS Integration

The theme uses **Tailwind CSS v4** with CSS variables for theming.

### Using Tailwind Utilities

```astro
<div class="p-4 bg-primary text-primary-foreground rounded-lg shadow-md">
  Styled with Tailwind
</div>
```

### Extending Tailwind

Tailwind v4 uses `@theme` directive in CSS. Edit `src/styles/starwind.css` to extend:

```css title="src/styles/starwind.css"
@theme inline {
  --color-brand: var(--accent);
  --spacing-huge: 5rem;
}
```

Use in HTML:

```html
<div class="bg-brand p-huge">Custom utilities</div>
```

---

## Best Practices

### ✅ Do

- **Use CSS variables** for all colors and spacing
- **Define tokens first**, then use them in components
- **Test both themes** when changing colors
- **Use semantic naming** (`--color-text-primary` not `--dark-gray`)
- **Leverage Tailwind** for layout and spacing

### ❌ Don't

- **Hardcode colors** in components
- **Skip theme testing** - always check light and dark modes
- **Override Starwind styles directly** - use tokens instead
- **Forget accessibility** - maintain sufficient color contrast

### Color Contrast

Ensure WCAG AA compliance (4.5:1 for normal text):

```css
/* ✅ Good - high contrast */
--foreground: #0f1219;
--background: #ffffff;

/* ❌ Bad - low contrast */
--foreground: #cccccc;
--background: #ffffff;
```

<Aside type="tip">
  Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify.
</Aside>

---

## Quick Reference

| What to Customize | File | Variable |
|-------------------|------|----------|
| Primary brand color | `tokens.css` | `--accent` |
| Secondary color | `tokens.css` | `--secondary` |
| Background color | `themes/light.css` or `dark.css` | `--background` |
| Text color | `themes/light.css` or `dark.css` | `--foreground` |
| Border radius | `tokens.css` | `--radius` |
| Shadows | `tokens.css` | `--shadow-*` |
| Font family | `global.css` | `font-family` in `body` |
| Font size | `global.css` | `font-size` in `body` |

---

## Next Steps

<CardGrid>
  <Card title="Customize Components" icon="puzzle">
    Learn how to customize components and layouts.
    
  [Customization Guide →](/guides/customization/)
  </Card>
  
  <Card title="Configuration" icon="setting">
    Configure your site settings.
    
  [Configuration Guide →](/guides/configuration/)
  </Card>
  
  <Card title="Deploy" icon="rocket">
    Deploy your styled site to production.
    
  [Deployment Guide →](/deployment/)
  </Card>
</CardGrid>

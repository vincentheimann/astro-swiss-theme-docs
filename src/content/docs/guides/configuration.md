---
title: Configuration
description: Configure your Astro Swiss Theme with Astro, Starwind, i18n, and TypeScript settings.
---

import { Aside, Tabs, TabItem, Code } from '@astrojs/starlight/components';

Learn how to configure your Astro Swiss Theme for your specific needs.

## Quick Reference

| What to Configure | File | Section |
|-------------------|------|---------|
| Default language | `astro.config.mjs` | `i18n.defaultLocale` |
| Supported languages | `astro.config.mjs` | `i18n.locales` |
| Language names & flags | `src/i18n/ui.ts` | `languages` object |
| Translations | `src/i18n/ui.ts` | `ui` object |
| Contact info | `src/consts.ts` | All exports |
| Component base color | `starwind.config.json` | `tailwind.baseColor` |
| Brand colors | `src/styles/tokens.css` | See [Styling Guide](/guides/styling/) |

---

## Astro Configuration

**File:** `astro.config.mjs`

This file configures Astro's build system and i18n routing.

### Current Configuration

```javascript title="astro.config.mjs"
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

### i18n Options

#### `defaultLocale`

The default language for your site. This language will be served at the root path (`/`).

```javascript
defaultLocale: "fr"  // French is default
```

#### `locales`

Array of all supported language codes. Must match the languages defined in `src/i18n/ui.ts`.

```javascript
locales: ["fr", "de", "it", "rm"]  // Support 4 languages
```

#### `routing.prefixDefaultLocale`

When `false`, the default language is served at `/` instead of `/fr/`. Other languages use prefixes like `/de/`.

```javascript
prefixDefaultLocale: false  // French at /, German at /de/
prefixDefaultLocale: true   // French at /fr/, German at /de/
```

### Adding a New Locale

<Steps>

1. Add the locale code to the `locales` array
2. Add translations in `src/i18n/ui.ts`
3. Create page folder in `src/pages/[locale]/`

</Steps>

See **[Adding Languages](/guides/adding-languages/)** for detailed instructions.

---

## Starwind Configuration

**File:** `starwind.config.json`

This file configures the Starwind UI component library.

### Current Configuration

```json title="starwind.config.json"
{
  "$schema": "https://starwind.dev/config-schema.json",
  "tailwind": {
    "css": "src/styles/starwind.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "componentDir": "src/components",
  "components": [
    { "name": "button", "version": "2.2.0" },
    { "name": "card", "version": "1.3.0" },
    { "name": "carousel", "version": "1.0.1" },
    { "name": "avatar", "version": "1.2.1" },
    { "name": "input", "version": "1.3.1" },
    { "name": "label", "version": "1.2.0" },
    { "name": "textarea", "version": "1.3.1" },
    { "name": "separator", "version": "1.0.0" },
    { "name": "dropdown", "version": "1.2.2" }
  ]
}
```

### Configuration Options

#### `tailwind.css`

Path to the Starwind CSS file. This file contains the component styles.

```json
"css": "src/styles/starwind.css"
```

#### `tailwind.baseColor`

Base color palette for components.

**Options:** `neutral`, `slate`, `gray`, `zinc`, `stone`

```json
"baseColor": "slate"  // Use slate color palette
```

#### `tailwind.cssVariables`

When `true`, uses CSS variables for theming (recommended for dark mode support).

```json
"cssVariables": true
```

#### `componentDir`

Directory where Starwind components are installed.

```json
"componentDir": "src/components"
```

### Adding Starwind Components

To add a new Starwind component:

```bash
npx starwind add [component-name]
```

This automatically updates `starwind.config.json` and installs the component files.

<Aside title="Learn more">
  Visit [Starwind Docs](https://starwind.dev/) for available components and options.
</Aside>

---

## Global Constants

**File:** `src/consts.ts`

This file contains language-agnostic constants like contact information.

### Current Configuration

```typescript title="src/consts.ts"
// Language-agnostic contact information
export const AUTHOR_NAME = 'John Doe';
export const AUTHOR_EMAIL = 'info@professionalservices.com';
export const AUTHOR_PHONE = '+41 89 123 45 67';
export const AUTHOR_LINKEDIN_LINK = 'https://www.linkedin.com/in/vincentheimann/';
```

### Customization

Replace these values with your actual information:

```typescript title="src/consts.ts"
export const AUTHOR_NAME = 'Your Name';
export const AUTHOR_EMAIL = 'your.email@example.com';
export const AUTHOR_PHONE = '+1 234 567 8900';
export const AUTHOR_LINKEDIN_LINK = 'https://www.linkedin.com/in/yourprofile/';
```

### Usage in Components

Import these constants in your components:

```astro
---
import { AUTHOR_EMAIL, AUTHOR_PHONE } from '@/consts';
---

<a href={`mailto:${AUTHOR_EMAIL}`}>{AUTHOR_EMAIL}</a>
<a href={`tel:${AUTHOR_PHONE}`}>{AUTHOR_PHONE}</a>
```

<Aside type="note">
  For translatable content (like business name, taglines), use `src/i18n/ui.ts` instead.
</Aside>

---

## i18n Configuration

**File:** `src/i18n/ui.ts`

This file defines all languages and translations for your site.

### Language Definitions

```typescript title="src/i18n/ui.ts"
export const languages = {
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
} as const;

export type Language = keyof typeof languages;
export const defaultLang: Language = 'fr';
```

### Translation Keys

All translations are organized by language and key:

```typescript title="src/i18n/ui.ts"
export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.work': 'Nos Réalisations',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    // ... more translations
  },
  de: {
    'nav.home': 'Startseite',
    'nav.work': 'Unsere Arbeiten',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    // ... more translations
  },
} as const;
```

### Translation Categories

| Category | Keys | Purpose |
|----------|------|---------|
| **Navigation** | `nav.*` | Menu items, links |
| **CTA** | `cta.*` | Call-to-action buttons |
| **Business** | `business.*` | Company name, tagline, description |
| **Portfolio** | `portfolio.*` | Portfolio section |
| **Owner** | `owner.*` | Owner/founder information |
| **Contact** | `contact.*` | Contact form and info |
| **Site** | `site.*` | SEO metadata (title, description) |
| **Author** | `author.*` | Author details |
| **Theme** | `theme.*` | Theme toggle labels |

### Customizing Translations

**1. Edit existing translations:**

```typescript
'business.name': 'Your Company Name',
'business.tagline': 'Your tagline here',
```

**2. Add new translation keys:**

```typescript
fr: {
  // ... existing keys
  'footer.copyright': '© 2025 Tous droits réservés',
},
de: {
  // ... existing keys
  'footer.copyright': '© 2025 Alle Rechte vorbehalten',
},
```

**3. Use in components:**

```astro
---
import { useTranslations } from '@/i18n/utils';
const t = useTranslations(Astro.currentLocale);
---

<p>{t('footer.copyright')}</p>
```

### Best Practices

- ✅ Keep translation keys consistent across all languages
- ✅ Use dot notation for namespacing (e.g., `nav.home`, `contact.form.name`)
- ✅ Store language-agnostic data (emails, phone numbers) in `src/consts.ts`
- ✅ Always include the `as const` assertion for type safety

---

## TypeScript Configuration

**File:** `tsconfig.json`

Basic TypeScript configuration for Astro.

```json title="tsconfig.json"
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Path Aliases

The `@/*` alias maps to the `src/` directory, allowing clean imports:

```typescript
// Instead of:
import { useTranslations } from '../../../i18n/utils';

// Use:
import { useTranslations } from '@/i18n/utils';
```

---

## Environment Variables

For sensitive data or environment-specific configuration, create a `.env` file:

```bash title=".env"
PUBLIC_SITE_URL=https://yoursite.com
PUBLIC_GA_ID=G-XXXXXXXXXX
```

Access in Astro components:

```astro
---
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
---
```

<Aside type="caution" title="Security Warning">
  Prefix public variables with `PUBLIC_` to make them available in client-side code. Never commit `.env` files to version control.
</Aside>

---

## Next Steps

<CardGrid>
  <Card title="Customize Content" icon="pencil">
    Learn how to customize components and add new pages.
    
  [Customization Guide →](/guides/customization/)
  </Card>
  
  <Card title="Style Your Site" icon="palette">
    Configure colors, fonts, and design tokens.
    
  [Styling Guide →](/guides/styling/)
  </Card>
  
  <Card title="Add a Language" icon="translate">
    Add support for additional languages.
    
  [Adding Languages →](/guides/adding-languages/)
  </Card>
</CardGrid>

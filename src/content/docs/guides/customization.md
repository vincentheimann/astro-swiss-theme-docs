---
title: Customization
description: Customize your Astro Swiss Theme with components, pages, assets, and layouts.
---

import { Aside, Steps, Card, CardGrid, Tabs, TabItem } from '@astrojs/starlight/components';

Learn how to customize your Astro Swiss Theme to match your brand and needs.

## Editing Site Content

### Author & Contact Information

**File:** `src/consts.ts`

Edit your personal/business contact information:

```typescript title="src/consts.ts"
export const AUTHOR_NAME = 'Your Name';
export const AUTHOR_EMAIL = 'your.email@example.com';
export const AUTHOR_PHONE = '+1 234 567 8900';
export const AUTHOR_LINKEDIN_LINK = 'https://www.linkedin.com/in/yourprofile/';
```

These constants are used throughout the site in components like `ContactLink.astro` and `Header.astro`.

### Translatable Content

**File:** `src/i18n/ui.ts`

All user-facing text that needs translation is stored here. Edit the translations for each language:

<Tabs>
  <TabItem label="Business Info">
    ```typescript title="src/i18n/ui.ts"
    fr: {
      'business.name': 'Votre Entreprise',
      'business.tagline': 'Votre slogan ici',
      'business.description': 'Description de votre entreprise...',
    }
    ```
  </TabItem>
  
  <TabItem label="Navigation">
    ```typescript title="src/i18n/ui.ts"
    fr: {
      'nav.home': 'Accueil',
      'nav.work': 'Nos Réalisations',
      'nav.about': 'À Propos',
      'nav.contact': 'Contact',
    }
    ```
  </TabItem>
  
  <TabItem label="SEO Metadata">
    ```typescript title="src/i18n/ui.ts"
    fr: {
      'site.title': 'Your Site Title | Tagline',
      'site.description': 'Your site description for search engines',
    }
    ```
  </TabItem>
</Tabs>

<Aside type="tip">
  Keep translation keys consistent across all languages. If you add a new key in French, add it in German (and all other languages) too.
</Aside>

### Site Metadata

The `BaseLayout.astro` component handles SEO metadata. It uses translations from `ui.ts`:

```astro title="src/layouts/BaseLayout.astro"
---
const pageTitle = title || t("site.title");
const pageDescription = description || t("site.description");
---

<head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
</head>
```

You can override these on individual pages:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Custom Page Title" 
  description="Custom page description"
>
  <!-- Page content -->
</BaseLayout>
```

---

## Customizing Components

### Header Component

**File:** `src/components/Header.astro`

The header includes:
- Logo/brand name
- Navigation menu
- Contact links (phone, email)
- Language selector
- Theme toggle

**Customize the logo:**

```astro title="src/components/Header.astro"
<a href="/" class="logo">
  <!-- Replace with your logo image -->
  <img src="/logo.svg" alt="Your Brand" />
  <!-- Or use text -->
  <span>{t('business.name')}</span>
</a>
```

**Modify navigation items:**

```astro title="src/components/Header.astro"
<nav>
  <a href="#home">{t('nav.home')}</a>
  <a href="#work">{t('nav.work')}</a>
  <a href="#about">{t('nav.about')}</a>
  <a href="#contact">{t('nav.contact')}</a>
  <!-- Add new items -->
  <a href="#services">{t('nav.services')}</a>
</nav>
```

### Theme Toggle

**File:** `src/components/ThemeToggle.astro`

Switches between light and dark mode. The component uses `localStorage` to persist the user's preference.

**Customize icons:**

```astro title="src/components/ThemeToggle.astro"
<button id="theme-toggle" aria-label={t('theme.toggle')}>
  <Icon name="sun" class="light-icon" />
  <Icon name="moon" class="dark-icon" />
</button>
```

---

## Adding New Pages

### Single Language Page

Create a new file in `src/pages/`:

```astro title="src/pages/about.astro"
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Header from '@/components/Header.astro';
---

<BaseLayout title="About Us">
  <Header />
  <main>
    <h1>About Us</h1>
    <p>Your content here...</p>
  </main>
</BaseLayout>
```

This page will be available at `/about` (for default language).

### Multi-Language Page

For i18n support, create the page in each language folder:

```
src/pages/
├── about.astro           # French (default) - /about
└── de/
    └── about.astro       # German - /de/about
```

Each file uses the same structure but pulls translations from `ui.ts`:

```astro title="src/pages/about.astro"
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { useTranslations } from '@/i18n/utils';

const t = useTranslations(Astro.currentLocale);
---

<BaseLayout>
  <h1>{t('about.title')}</h1>
  <p>{t('about.description')}</p>
</BaseLayout>
```

### Dynamic Routes

Create dynamic routes using `[param].astro`:

```astro title="src/pages/blog/[slug].astro"
---
export async function getStaticPaths() {
  return [
    { params: { slug: 'post-1' } },
    { params: { slug: 'post-2' } },
  ];
}

const { slug } = Astro.params;
---

<h1>Blog Post: {slug}</h1>
```

---

## Working with Assets

### Images

**Location:** `src/assets/`

Add images to this folder and import them in components:

```astro
---
import logo from '@/assets/logo.png';
import { Image } from 'astro:assets';
---

<Image src={logo} alt="Logo" width={200} height={100} />
```

For static images, use the `public/` folder:

```astro
<img src="/images/photo.jpg" alt="Photo" />
```

### Fonts

**Location:** `public/fonts/`

The theme uses Poppins font. To add custom fonts:

<Steps>

1. Add font files to `public/fonts/`

2. Update `src/styles/global.css`:

   ```css title="src/styles/global.css"
   @font-face {
     font-family: "YourFont";
     src: url("/fonts/YourFont-Regular.ttf") format("truetype");
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   
   body {
     font-family: "YourFont", sans-serif;
   }
   ```

</Steps>

### Favicon

**Location:** `public/favicon.svg`

Replace this file with your own favicon. Supported formats:
- `.svg` (recommended for scalability)
- `.ico`
- `.png`

Update the reference in `BaseLayout.astro` if using a different format:

```astro title="src/layouts/BaseLayout.astro"
<link rel="icon" type="image/png" href="/favicon.png" />
```

### Icons

The theme uses [Tabler Icons](https://tabler.io/icons). To use an icon:

```astro
---
import Icon from '@tabler/icons/outline/mail.svg?component';
---

<Icon class="w-6 h-6" />
```

---

## Component Library

### Starwind Components

The theme includes these Starwind UI components:

| Component | Location | Usage |
|-----------|----------|-------|
| Button | `src/components/starwind/button.astro` | Buttons with variants |
| Card | `src/components/starwind/card.astro` | Content cards |
| Carousel | `src/components/starwind/carousel.astro` | Image/content carousel |
| Avatar | `src/components/starwind/avatar.astro` | User avatars |
| Input | `src/components/starwind/input.astro` | Form inputs |
| Label | `src/components/starwind/label.astro` | Form labels |
| Textarea | `src/components/starwind/textarea.astro` | Multi-line inputs |
| Separator | `src/components/starwind/separator.astro` | Horizontal dividers |
| Dropdown | `src/components/starwind/dropdown.astro` | Dropdown menus |

### Using Starwind Components

```astro
---
import { Button } from '@/components/starwind/button';
import { Card } from '@/components/starwind/card';
---

<Card>
  <h2>Card Title</h2>
  <p>Card content</p>
  <Button variant="primary">Click Me</Button>
</Card>
```

### Adding More Components

Install additional Starwind components:

```bash
npx starwind add [component-name]
```

Browse available components at [starwind.dev](https://starwind.dev).

### Creating Custom Components

Create reusable components in `src/components/`:

```astro title="src/components/Feature.astro"
---
interface Props {
  title: string;
  description: string;
  icon?: string;
}

const { title, description, icon } = Astro.props;
---

<div class="feature">
  {icon && <img src={icon} alt="" />}
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .feature {
    padding: 2rem;
    border-radius: var(--radius);
    background: var(--card);
  }
</style>
```

Use in pages:

```astro
---
import Feature from '@/components/Feature.astro';
---

<Feature 
  title="Fast" 
  description="Lightning fast performance"
  icon="/icons/speed.svg"
/>
```

---

## Best Practices

### Content Organization

- ✅ Store language-agnostic data in `consts.ts`
- ✅ Store translatable content in `i18n/ui.ts`
- ✅ Keep components small and focused
- ✅ Use layouts for shared structure
- ✅ Organize assets by type (images, fonts, icons)

### Component Design

- ✅ Use TypeScript interfaces for props
- ✅ Provide sensible defaults
- ✅ Make components reusable
- ✅ Use CSS variables for theming
- ✅ Follow Astro's component conventions

### File Naming

- ✅ Use PascalCase for components: `Header.astro`
- ✅ Use kebab-case for pages: `about-us.astro`
- ✅ Use lowercase for utilities: `utils.ts`

---

## Next Steps

<CardGrid>
  <Card title="Style Your Site" icon="palette">
    Learn about the styling system and design tokens.
    
  [Styling Guide →](/guides/styling/)
  </Card>
  
  <Card title="Manage Data" icon="document">
    Add employees, portfolio projects, and manage content.
    
  [Data Management →](/guides/data-management/)
  </Card>
  
  <Card title="Add Languages" icon="translate">
    Add support for more languages.
    
  [Adding Languages →](/guides/adding-languages/)
  </Card>
</CardGrid>

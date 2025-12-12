# Getting Started

> [!IMPORTANT]
> **License**: This is the free version for personal use and evaluation. For client projects and commercial use, [upgrade to Premium](https://themeforest.net).

Get your site running and customized quickly with this guide.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/vincentheimann/astro-swiss-starter-theme.git
cd astro-swiss-starter-theme

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. You should see:

![Homepage in light mode](assets/homepage-light.png)
*Your site running with example content*

Try the dark mode toggle in the header:

![Homepage in dark mode](assets/dark-mode-toggle.webp)
*Automatic dark mode support*

---

## Initial Configuration

> [!TIP]
> **For experienced developers**: Use your editor's search/replace feature to update all instances of example data at once. Check `src/consts.ts` and `src/i18n/ui.ts` for all configurable values.

### 1. Update Company Information

Open `src/consts.ts` and update:

```typescript
export const COMPANY: CompanyInfo = {
    name: "Your Company Name",
    address: "Your Street Address",
    city: "CH-1000 Your City",
    phone: "+41 XX XXX XX XX",
    email: "contact@yourcompany.com",
    // ... rest stays the same for now
};
```

Save and watch your browser update instantly with hot module replacement.

### 2. Configure Brand Colors

Open `src/styles/tokens.css` and update the accent color:

```css
:root {
  --accent: #3b82f6;  /* Change to your brand color */
}
```

The theme will update immediately in your browser.

### 3. Update Site Metadata

Open `src/i18n/ui.ts` and find the `fr:` section (French):

```typescript
fr: {
  'business.name': 'Your Company Name',
  'business.tagline': 'Your tagline here',
  'site.title': 'Your Site Title',
  'site.description': 'Your site description for SEO',
  // ... more below
}
```

Repeat for the `de:` section (German) if you're using both languages.

---

## What You Have

Your site now includes:
- Multilingual support (French & German)
- Automatic dark/light mode with user preference persistence
- Fully responsive, mobile-first design
- Optimized performance with Astro's static site generation
- Built-in accessibility features (WCAG 2.1 Level AA)

---

## Next Steps - Pick Your Path

### Add Your Team
Want to add employees? → [Data Management Guide](DATA_MANAGEMENT.md#adding-an-employee)

### Add Your Work
Want to showcase projects? → [Data Management Guide](DATA_MANAGEMENT.md#adding-a-portfolio-project)

### Customize Design
Want to change colors, fonts, or styling? → [Styling Guide](STYLING.md)

### Add More Languages
Want to support more languages? → [Adding Languages](ADDING_LANGUAGES.md)

### Deploy Your Site
Ready to go live? → [Deployment Guide](DEPLOYMENT.md)

---

## Verify Your Setup

Before moving forward, confirm:
- [ ] Dev server is running without errors
- [ ] Site loads at `http://localhost:4321`
- [ ] Dark mode toggle works
- [ ] Language selector displays both French and German
- [ ] Your company information displays correctly

## Need Help?

- **Documentation**: [Full documentation listing](../README.md)
- **Community**: [Astro Discord](https://astro.build/chat)
- **Issues**: [GitHub Issues](https://github.com/vincentheimann/astro-swiss-starter-theme/issues)
- **Support**: See [Support Guide](SUPPORT.md) for assistance options

---

> [!NOTE]
> Keep the dev server running (`npm run dev`) while making changes. Hot module replacement will update your browser automatically.

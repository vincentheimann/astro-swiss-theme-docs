---
title: Support & FAQ
description: Get help with your Astro Swiss Theme, find answers to common questions, and access support resources.
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

Get support for your Astro Swiss Theme and find answers to common questions.

## Getting Support

Thank you for using the Astro Swiss Starter Theme! We're here to help you get the most out of your theme.

### Check Documentation First

Before reaching out, please check our comprehensive documentation:

<CardGrid>
  <Card title="Getting Started" icon="rocket">
    Installation and basic setup
    
  [View Guide →](/getting-started/)
  </Card>
  
  <Card title="Configuration" icon="setting">
    Configuration options
    
  [View Guide →](/guides/configuration/)
  </Card>
  
  <Card title="Customization" icon="pencil">
    Advanced customization
    
  [View Guide →](/guides/customization/)
  </Card>
  
  <Card title="Deployment" icon="rocket">
    Deploying your site
    
  [View Guide →](/deployment/)
  </Card>
</CardGrid>

### Contact Support

If you can't find the answer in the documentation:

**Email Support**: [hello@astroswiss.com](mailto:hello@astroswiss.com)

<Aside type="note">
  When contacting support, please include:
  - Detailed description of the issue
  - Steps to reproduce the problem
  - Screenshots or error messages (if applicable)
  - Browser and OS you're using
  - URL of your site (if deployed)
</Aside>

---

## Frequently Asked Questions

### Installation & Setup

**Q: What are the system requirements?**

A: You need Node.js 18+ and npm. See [Getting Started](/getting-started/) for details.

**Q: How do I install the theme?**

A: Extract the zip file, run `npm install`, then `npm run dev`. Full instructions in [Getting Started](/getting-started/).

**Q: The build fails with errors. What should I do?**

A: Make sure you're using Node.js 18 or higher. Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

### Customization

**Q: How do I change the colors?**

A: Edit `src/styles/tokens.css` to change the color scheme. See [Styling Guide](/guides/styling/).

**Q: How do I add my logo?**

A: Replace `src/assets/logo.svg` with your logo. See [Customization Guide](/guides/customization/).

**Q: Can I add more languages?**

A: Yes! Follow the [Adding Languages Guide](/guides/adding-languages/).

**Q: How do I change the company information?**

A: Edit `src/consts.ts` to update company details. See [Data Management](/guides/data-management/).

---

### Content Management

**Q: How do I add portfolio projects?**

A: Add projects to `src/data/portfolio/fr.ts` and `de.ts`. See [Data Management](/guides/data-management/#adding-a-portfolio-project).

**Q: How do I add team members?**

A: Add employees to `src/consts.ts`. See [Data Management](/guides/data-management/#adding-an-employee).

**Q: How do I change the services?**

A: Edit translations in `src/i18n/ui.ts`. See [Data Management](/guides/data-management/).

---

### Deployment

**Q: How do I deploy my site?**

A: We recommend Netlify or Vercel. See [Deployment Guide](/deployment/) for step-by-step instructions.

**Q: My site works locally but not in production. Why?**

A: Check that your build completed successfully and that environment variables are set correctly.

**Q: How do I set up a custom domain?**

A: This depends on your hosting provider. See [Deployment Guide](/deployment/) for provider-specific instructions.

---

### Features

**Q: Does the contact form actually send emails?**

A: The form is a frontend template. You need to connect it to a backend service like Formspree, Netlify Forms, or your own API.

**Q: How do I add Google Analytics?**

A: Add your GA ID to `.env`. See [Deployment Guide](/deployment/#monitoring--analytics).

**Q: Is the theme SEO-friendly?**

A: Yes! It includes automatic sitemap generation, meta tags, and semantic HTML. See [Deployment Guide](/deployment/#seo-optimization).

---

### Technical Issues

**Q: Dark mode doesn't persist after page reload.**

A: This is usually a browser localStorage issue. Check your browser's privacy settings.

**Q: Images aren't loading.**

A: Make sure images are in `src/assets/` and imported correctly. Astro optimizes images at build time.

**Q: The language switcher doesn't work.**

A: Check that you have translations for all languages in `src/i18n/ui.ts`.

---

## Community Resources

### Astro Resources
- **[Astro Documentation](https://docs.astro.build)** - Official Astro docs
- **[Astro Discord](https://astro.build/chat)** - Community support

### Starwind Resources
- **[Starwind Documentation](https://starwind.dev)** - Component library docs

### Tailwind Resources
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Tailwind documentation

---

## Feedback & Feature Requests

We love hearing from our users! If you have:

- **Feature Requests** - Ideas for new features
- **Feedback** - Suggestions for improvements
- **Bug Reports** - Issues you've encountered

Please email us at: [hello@astroswiss.com](mailto:hello@astroswiss.com)

---

## GitHub

- **Repository**: [github.com/vincentheimann/astro-swiss-free-starter-theme](https://github.com/vincentheimann/astro-swiss-free-starter-theme)
- **Issues**: [Report a bug or request a feature](https://github.com/vincentheimann/astro-swiss-free-starter-theme/issues)

---

<Aside type="tip">
  **Need more help?** Don't hesitate to reach out at [hello@astroswiss.com](mailto:hello@astroswiss.com). We're here to help!
</Aside>

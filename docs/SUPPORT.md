# Support & Help

## Getting Support

Thank you for purchasing the Astro Swiss Starter Theme! We're here to help you get the most out of your theme.

---

## What's Included in Support

### ✅ Covered by Support

- **Installation Help** - Assistance with setting up the theme
- **Configuration Questions** - Help with theme configuration and settings
- **Bug Fixes** - Resolution of any bugs or issues in the theme code
- **Documentation Clarification** - Explaining how features work
- **Update Assistance** - Help with updating to new versions
- **Best Practices** - Guidance on using the theme effectively

### ❌ Not Covered by Support

- **Custom Development** - Building new features or custom functionality
- **Third-Party Integrations** - Integrating with external services not documented
- **Hosting Issues** - Server configuration or hosting provider problems
- **Content Creation** - Writing content or creating images for your site
- **General Web Development** - Teaching HTML, CSS, JavaScript, or Astro basics
- **Customization Services** - Modifying the theme beyond configuration

> [!NOTE]
> If you need custom development or extensive customization, we can discuss this separately. Contact us for a quote.

---

## How to Get Support

### 1. Check the Documentation First

Before reaching out, please check our comprehensive documentation:

- **[Getting Started Guide](GETTING_STARTED.md)** - Installation and basic setup
- **[Data Management](DATA_MANAGEMENT.md)** - Adding content and data
- **[Styling Guide](STYLING.md)** - Customizing colors and design
- **[Customization Guide](CUSTOMIZATION.md)** - Advanced customization
- **[Configuration](CONFIGURATION.md)** - Configuration options
- **[Adding Languages](ADDING_LANGUAGES.md)** - Internationalization
- **[Deployment](DEPLOYMENT.md)** - Deploying your site
- **[Browser Support](BROWSER_SUPPORT.md)** - Browser compatibility

### 2. Check Common Issues (FAQ)

See the [FAQ section](#frequently-asked-questions) below for common questions and solutions.

### 3. Contact Support

If you can't find the answer in the documentation:

**Email Support**: heimvin@gmail.com

**Response Time**: 24-48 hours (Monday-Friday, excluding Swiss holidays)

**Support Period**: 6 months from purchase date (as per ThemeForest standard)

---

## When Contacting Support

To help us assist you quickly, please include:

1. **Your Purchase Code** (from ThemeForest)
2. **Theme Version** (check `package.json`)
3. **Detailed Description** of the issue
4. **Steps to Reproduce** the problem
5. **Screenshots or Error Messages** (if applicable)
6. **Browser and OS** you're using
7. **URL** of your site (if deployed)

### Example Support Request

```
Subject: Issue with Dark Mode Toggle

Purchase Code: XXXX-XXXX-XXXX-XXXX
Theme Version: 1.0.0
Browser: Chrome 120 on Windows 11

Description:
The dark mode toggle button doesn't switch themes when clicked.

Steps to Reproduce:
1. Navigate to homepage
2. Click the theme toggle button in header
3. Nothing happens

Screenshot: [attached]
Site URL: https://mysite.com
```

---

## Frequently Asked Questions

### Installation & Setup

**Q: What are the system requirements?**
A: You need Node.js 18+ and npm. See [Getting Started](GETTING_STARTED.md) for details.

**Q: How do I install the theme?**
A: Extract the zip file, run `npm install`, then `npm run dev`. Full instructions in [Getting Started](GETTING_STARTED.md).

**Q: The build fails with errors. What should I do?**
A: Make sure you're using Node.js 18 or higher. Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### Customization

**Q: How do I change the colors?**
A: Edit `src/styles/tokens.css` to change the color scheme. See [Styling Guide](STYLING.md).

**Q: How do I add my logo?**
A: Replace `src/assets/logo.svg` with your logo. See [Customization Guide](CUSTOMIZATION.md).

**Q: Can I add more languages?**
A: Yes! Follow the [Adding Languages Guide](ADDING_LANGUAGES.md).

**Q: How do I change the company information?**
A: Edit `src/consts.ts` to update company details. See [Data Management](DATA_MANAGEMENT.md).

### Content Management

**Q: How do I add portfolio projects?**
A: Add projects to `src/data/portfolio/fr.ts` and `de.ts`. See [Data Management](DATA_MANAGEMENT.md#adding-a-portfolio-project).

**Q: How do I add team members?**
A: Add employees to `src/consts.ts`. See [Data Management](DATA_MANAGEMENT.md#adding-an-employee).

**Q: How do I change the services?**
A: Edit translations in `src/i18n/ui.ts`. See [Data Management](DATA_MANAGEMENT.md).

### Deployment

**Q: How do I deploy my site?**
A: We recommend Netlify or Vercel. See [Deployment Guide](DEPLOYMENT.md) for step-by-step instructions.

**Q: My site works locally but not in production. Why?**
A: Check that your build completed successfully and that environment variables are set correctly.

**Q: How do I set up a custom domain?**
A: This depends on your hosting provider. See [Deployment Guide](DEPLOYMENT.md) for provider-specific instructions.

### Features

**Q: Does the contact form actually send emails?**
A: The form is a frontend template. You need to connect it to a backend service like Formspree, Netlify Forms, or your own API.

**Q: How do I add Google Analytics?**
A: The theme includes Google Tag Manager integration. Add your GTM ID to `.env`. See [Configuration](CONFIGURATION.md).

**Q: Is the theme SEO-friendly?**
A: Yes! It includes automatic sitemap generation, meta tags, and semantic HTML. See [Configuration](CONFIGURATION.md#seo-configuration).

### Technical Issues

**Q: Dark mode doesn't persist after page reload.**
A: This is usually a browser localStorage issue. Check your browser's privacy settings.

**Q: Images aren't loading.**
A: Make sure images are in `src/assets/` and imported correctly. Astro optimizes images at build time.

**Q: The language switcher doesn't work.**
A: Check that you have translations for all languages in `src/i18n/ui.ts`.

---

## Updates & Changelog

### Checking for Updates

Check the [CHANGELOG.md](../CHANGELOG.md) file for version history and updates.

### Updating the Theme

1. **Backup your customizations** (especially `consts.ts`, `ui.ts`, and custom components)
2. **Download the latest version** from ThemeForest
3. **Compare changes** using a diff tool
4. **Merge your customizations** into the new version
5. **Test thoroughly** before deploying

> [!WARNING]
> Always backup your site before updating!

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

Please email us at: heimvin@gmail.com

---

## Leave a Review

If you're happy with the theme, we'd greatly appreciate a 5-star review on ThemeForest! Your feedback helps us improve and helps other users make informed decisions.

---

## Extended Support

Need support beyond the 6-month period? Contact us about extended support options:

- **Extended Support** - Additional 6 months: $15
- **Priority Support** - 12-hour response time: $50/year
- **Custom Development** - Hourly rate available on request

---

**Last Updated**: December 1, 2024

Thank you for choosing the Astro Swiss Starter Theme! 🚀

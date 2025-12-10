---
title: Deployment
description: Deploy your Astro Swiss Theme to production with Vercel, Netlify, Cloudflare Pages, or other platforms.
---

import { Aside, Steps, Tabs, TabItem, Card, CardGrid } from '@astrojs/starlight/components';

Deploy your Astro Swiss Theme site to production in minutes.

## Building for Production

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Build Locally

Before deploying, test your production build:

```bash
npm run preview
```

Visit `http://localhost:4321` to preview the built site.

### Build Output

The build process:
1. ✅ Compiles TypeScript to JavaScript
2. ✅ Optimizes and bundles CSS
3. ✅ Minifies HTML
4. ✅ Optimizes images
5. ✅ Generates static routes for all languages
6. ✅ Creates sitemap (if configured)

**Output structure:**
```
dist/
├── index.html           # French homepage (default locale)
├── de/
│   └──index.html      # German homepage
├── _astro/             # Bundled CSS and JS
├── fonts/              # Font files
└── favicon.svg
```

---

## Deployment Platforms

### Vercel (Recommended)

**Why Vercel?**
- Zero-config deployment for Astro
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs

<Steps>

1. **Connect via GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Astro and configures build settings
   - Click "Deploy"

2. **Or deploy via CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

</Steps>

**Build Settings:**
- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

### Netlify

<Steps>

1. **Create `netlify.toml`** in project root:
   
   ```toml title="netlify.toml"
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy:**
   
   - **Via Dashboard:** Go to [netlify.com](https://netlify.com) and import your repository
   - **Via CLI:**
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod
     ```

</Steps>

---

### Cloudflare Pages

<Steps>

1. **Via Dashboard:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Build output:** `dist`
     - **Framework preset:** Astro

2. **Via Wrangler CLI:**
   ```bash
   npm install -g wrangler
   wrangler pages deploy dist
   ```

</Steps>

---

### GitHub Pages

<Steps>

1. **Install Astro adapter:**
   ```bash
   npm install @astrojs/github-pages
   ```

2. **Update `astro.config.mjs`:**
   ```javascript title="astro.config.mjs" ins={3-4}
   import { defineConfig } from 'astro/config';
   
   export default defineConfig({
     site: 'https://username.github.io',
     base: '/repo-name',
   });
   ```

3. **Create `.github/workflows/deploy.yml`:**
   ```yaml title=".github/workflows/deploy.yml"
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Enable GitHub Pages** in repository settings:
   - Source: `gh-pages` branch

</Steps>

---

## Environment Variables

### Public Variables

Variables prefixed with `PUBLIC_` are available in client-side code.

**Create `.env` file:**
```bash title=".env"
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Use in components:**
```astro
---
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
---

<meta property="og:url" content={siteUrl} />
```

### Private Variables

Variables without `PUBLIC_` prefix are only available server-side.

```bash title=".env"
API_KEY=secret-key-here
DATABASE_URL=postgres://...
```

<Aside type="caution" title="Security">
  Never commit `.env` files to version control. Add `.env` to `.gitignore`.
</Aside>

### Platform-Specific Setup

<Tabs>
  <TabItem label="Vercel">
    Add variables in Project Settings → Environment Variables
  </TabItem>
  
  <TabItem label="Netlify">
    Add variables in Site Settings → Environment Variables
  </TabItem>
  
  <TabItem label="Cloudflare">
    Add variables in Settings → Environment Variables
  </TabItem>
</Tabs>

---

## SEO Optimization

### Sitemap

Install Astro sitemap integration:

```bash
npx astro add sitemap
```

Update `astro.config.mjs`:

```javascript title="astro.config.mjs" ins={1,5}
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
});
```

This generates `sitemap.xml` automatically during build.

### Robots.txt

Create `public/robots.txt`:

```txt title="public/robots.txt"
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Meta Tags

The `BaseLayout.astro` includes essential meta tags:

- ✅ Title and description
- ✅ Open Graph tags
- ✅ Language attribute
- ✅ Viewport meta tag

**Customize per page:**
```astro
<BaseLayout 
  title="Custom Page Title | Your Brand"
  description="Specific page description for SEO"
>
  <!-- Content -->
</BaseLayout>
```

---

## Performance Optimization

### Image Optimization

Use Astro's built-in `<Image>` component:

```astro
---
import { Image } from 'astro:assets';
import hero from '@/assets/hero.jpg';
---

<Image 
  src={hero} 
  alt="Hero image" 
  width={1200} 
  height={600}
  loading="lazy"
/>
```

Benefits:
- Automatic format conversion (WebP, AVIF)
- Responsive image generation
- Lazy loading
- Size optimization

### Lighthouse Score Tips

1. **Optimize images** - Use WebP/AVIF formats
2. **Minimize fonts** - Load only needed weights
3. **Enable compression** - Gzip/Brotli on server
4. **Use CDN** - Serve assets from edge locations
5. **Lazy load** - Defer non-critical resources

**Target scores:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Custom Domain

<Tabs>
  <TabItem label="Vercel">
    1. Go to Project Settings → Domains
    2. Add your domain
    3. Update DNS records as instructed
  </TabItem>
  
  <TabItem label="Netlify">
    1. Go to Domain Settings
    2. Add custom domain
    3. Configure DNS or use Netlify DNS
  </TabItem>
  
  <TabItem label="Cloudflare">
    1. Go to Custom Domains
    2. Add domain
    3. Update DNS records (automatic if using Cloudflare DNS)
  </TabItem>
</Tabs>

---

## Troubleshooting

### Build Fails

**Check Node version:**
```bash
node --version  # Should be 18.x or higher
```

**Clear cache and rebuild:**
```bash
rm -rf node_modules dist .astro
npm install
npm run build
```

### 404 Errors on Deployment

Ensure your hosting is configured for SPA-style routing:
- Vercel/Netlify: Auto-configured
- Others: Configure server to serve `index.html` for all routes

### Slow Build Times

- Optimize images before adding to project
- Use `.astro` components instead of framework components
- Limit the number of pages generated

---

## Next Steps

<CardGrid>
  <Card title="Configure" icon="setting">
    Configure your site settings.
    
  [Configuration →](/guides/configuration/)
  </Card>
  
  <Card title="Styling" icon="palette">
    Customize your site's appearance.
    
  [Styling Guide →](/guides/styling/)
  </Card>
  
  <Card title="Support" icon="information">
    Get help and support.
    
  [Support & FAQ →](/reference/support/)
  </Card>
</CardGrid>

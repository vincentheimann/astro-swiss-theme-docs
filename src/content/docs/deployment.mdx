---
title: Deployment
description: Deploy your Astro Swiss Theme to production with Vercel, Netlify, Cloudflare Pages, or other platforms.
---

import { Aside, Steps, Tabs, TabItem, Card, CardGrid } from '@astrojs/starlight/components';

**Goal:** Deploy to Netlify in 5 minutes.

Deploy your Astro Swiss Theme site to production in minutes. These deployment instructions work for both the free starter theme and the paid version.

<Aside type="note" title="Prerequisites">
  Before deploying, ensure you have:
  - Completed local development and testing
  - Created a GitHub repository for your project
  - Signed up for your chosen hosting platform (Vercel, Netlify, etc.)
</Aside>

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

## Deploy to Netlify (Primary)

**Why Netlify?**
- Simple configuration
- Automatic HTTPS & CDN
- GitHub integration
- Free tier available

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

## Alternative: Vercel

Vercel auto-detects Astro projects  - no configuration file needed:

1. Go to [vercel.com](https://vercel.com) and import your GitHub repository
2. Vercel automatically configures build settings
3. Click "Deploy"

**Or use CLI:**
```bash
npm i -g vercel
vercel
```

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

## License Note

:::note[Commercial Use]
The **free version** is for personal projects only. For client work or commercial projects, a commercial license is required.

[View License Comparison →](https://astroswiss.com#pricing)
:::

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

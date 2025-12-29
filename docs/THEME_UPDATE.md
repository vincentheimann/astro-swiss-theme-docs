# Theme Update Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

> [!IMPORTANT]
> **Always backup your work before updating!** Create a Git commit or copy your project folder before proceeding with any update.

Keep your Astro Swiss theme up-to-date with the latest features, improvements, and security fixes.

> [!TIP]
> **First time updating?** Read the [Before You Update](#before-you-update) section first. If something goes wrong, see [Emergency Rollback](#emergency-rollback).

---

## Table of Contents

- [Before You Update](#before-you-update)
- [Choosing an Update Method](#choosing-an-update-method)
- [Method 1: Safe Update](#method-1-safe-update-recommended-for-heavy-customizations)
- [Method 2: Fresh Install](#method-2-fresh-install-recommended-for-light-customizations)
- [Method 3: Git Merge](#method-3-git-merge-for-advanced-users)
- [Handling Breaking Changes](#handling-breaking-changes)
- [Post-Update Checklist](#post-update-checklist)
- [Troubleshooting](#troubleshooting)
- [Emergency Rollback](#emergency-rollback)
- [Best Practices](#best-practices)

---

## Before You Update

### 1. Check Your Current Version

⏱️ **Time: 1 minute**

Find your current version in [package.json](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/package.json):

```json
{
  "name": "astro-swiss-starter-theme",
  "version": "1.0.0"  // ← Your current version
}
```

### 2. Review the Changelog

⏱️ **Time: 5-10 minutes**

**Always read the changelog before updating!** It contains:
- ✨ New features
- 🐛 Bug fixes
- ⚠️ Breaking changes
- 📝 Migration instructions

Visit the [Changelog](https://github.com/vincentheimann/astro-swiss-starter-theme/blob/main/CHANGELOG.md) or check your purchase email for update notifications.

> [!NOTE]
> **What's New in This Version?** Check the changelog for a summary of changes. This helps you decide if the update is worth the effort and what to test afterward.

### 3. Document Your Customizations

⏱️ **Time: 5 minutes**

Create a customization checklist. Copy this template to a file called `my-customizations.md`:

```markdown
# My Customizations Checklist

## Modified Files
- [ ] src/consts.ts - Company info and employees
- [ ] src/i18n/ui.ts - Custom translations
- [ ] src/data/portfolio/fr.ts - Portfolio projects (French)
- [ ] src/data/portfolio/de.ts - Portfolio projects (German)
- [ ] src/styles/tokens.css - Brand colors
- [ ] .env - Environment variables

## Custom Files I Created
- [ ] src/components/[ComponentName].astro
- [ ] src/pages/[PageName].astro
- [ ] Other: _______________

## Assets
- [ ] src/assets/ - Custom images
- [ ] public/ - Static files

## Notes
- Customization details: _______________
- Special configurations: _______________
```

> [!TIP]
> **Save this checklist!** You'll reference it during the update process to ensure nothing is missed.

---

## Choosing an Update Method

### Quick Decision Guide

**Answer these questions:**

1. **Have you created custom components or pages?**
   - Yes → Use [Method 1: Safe Update](#method-1-safe-update-recommended-for-heavy-customizations)
   - No → Continue to question 2

2. **Have you modified theme files beyond `consts.ts`, `ui.ts`, and `tokens.css`?**
   - Yes → Use [Method 1: Safe Update](#method-1-safe-update-recommended-for-heavy-customizations)
   - No → Continue to question 3

3. **Are you comfortable with Git and merge conflicts?**
   - Yes → Use [Method 3: Git Merge](#method-3-git-merge-for-advanced-users) (fastest)
   - No → Use [Method 2: Fresh Install](#method-2-fresh-install-recommended-for-light-customizations) (safest)

### Method Comparison

| Method | Best For | Difficulty | Time | Risk |
|--------|----------|------------|------|------|
| [Safe Update](#method-1-safe-update-recommended-for-heavy-customizations) | Heavy customizations, custom components | Medium | 30-60 min | Low |
| [Fresh Install](#method-2-fresh-install-recommended-for-light-customizations) | Light customizations (mostly data changes) | Easy | 20-40 min | Very Low |
| [Git Merge](#method-3-git-merge-for-advanced-users) | Git users comfortable with conflicts | Advanced | 15-30 min | Medium |

> [!TIP]
> **Still not sure?** When in doubt, use **Method 2: Fresh Install**. It's the safest approach and works well for most users.

---

## Method 1: Safe Update (Recommended for Heavy Customizations)

**Best for:** Sites with custom components, structural changes, or extensive modifications.

**Total time:** ⏱️ 30-60 minutes

This method manually merges new features while preserving your work.

### Step 1: Backup Your Work (5 minutes)

**Option A: Git Backup (Recommended)**

```bash
# Commit all changes
git add .
git commit -m "Pre-update backup - v1.0.0"

# Create backup branch
git branch backup-v1.0.0

# Tag current state
git tag pre-update-v1.0.0
```

**Option B: Manual Backup**

```bash
# Windows
xcopy /E /I astro-swiss-starter-theme astro-swiss-backup-2025-12-29

# Mac/Linux
cp -r astro-swiss-starter-theme astro-swiss-backup-2025-12-29
```

### Step 2: Download New Version (2 minutes)

1. Download the latest theme `.zip` file from your purchase email or dashboard
2. Extract to a temporary location (e.g., `astro-swiss-v1.1.0-temp`)

### Step 3: Compare Changes (10-15 minutes)

Use a diff tool to compare folders:

| Platform | Recommended Tools |
|----------|------------------|
| Windows | WinMerge, Beyond Compare |
| Mac | FileMerge, Kaleidoscope |
| Cross-platform | VS Code, Meld |

**Focus on these key areas:**

| Area | What to Check |
|------|---------------|
| `package.json` | New dependencies, version updates |
| `src/components/` | New or updated components |
| `src/styles/` | New design tokens, CSS updates |
| `astro.config.mjs` | Configuration changes |
| `starwind.config.json` | Starwind UI updates |

### Step 4: Update Dependencies (3-5 minutes)

Copy the new `package.json` dependencies section and install:

```bash
npm install
```

> [!NOTE]
> **Installation taking long?** This is normal for major updates. Dependencies are being downloaded and compiled.

### Step 5: Merge New Features (10-20 minutes)

Manually copy new features you want:

- **New components**: Copy from `src/components/` in the new version
- **Style updates**: Merge changes from `src/styles/`
- **Configuration**: Update `astro.config.mjs` if needed

> [!WARNING]
> **Don't overwrite your customized files!** Review each change carefully and merge selectively.

### Step 6: Test Thoroughly (10-15 minutes)

```bash
# Start dev server
npm run dev
```

**Verify in browser (http://localhost:4321):**
- ✅ All pages load correctly
- ✅ Language switching works (French ↔ German)
- ✅ Dark mode toggle works
- ✅ Your customizations are intact
- ✅ New features work as expected
- ✅ No console errors (press F12 to check)

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

> [!IMPORTANT]
> **Don't skip the production build test!** Some issues only appear in production builds.

---

## Method 2: Fresh Install (Recommended for Light Customizations)

**Best for:** Sites with minimal customizations (mostly data in `consts.ts`, `i18n/`, and `data/`).

**Total time:** ⏱️ 20-40 minutes

This method starts fresh and re-applies your customizations.

### Step 1: Save Your Customizations (5 minutes)

Create a customizations folder:

**Mac/Linux:**
```bash
# Create backup folder
mkdir my-customizations

# Copy your data files
cp src/consts.ts my-customizations/
cp src/i18n/ui.ts my-customizations/
cp -r src/data/portfolio my-customizations/
cp src/styles/tokens.css my-customizations/
cp -r src/assets my-customizations/
cp .env my-customizations/

# Copy any custom files you created
# cp src/components/MyCustomComponent.astro my-customizations/
```

**Windows (PowerShell):**
```powershell
# Create backup folder
New-Item -ItemType Directory -Path my-customizations

# Copy your data files
Copy-Item src/consts.ts my-customizations/
Copy-Item src/i18n/ui.ts my-customizations/
Copy-Item -Recurse src/data/portfolio my-customizations/
Copy-Item src/styles/tokens.css my-customizations/
Copy-Item -Recurse src/assets my-customizations/
Copy-Item .env my-customizations/
```

### Step 2: Install New Version (5 minutes)

1. **Backup your current project** (if not using Git):
   ```bash
   # Mac/Linux
   cp -r ../astro-swiss-starter-theme ../astro-swiss-backup
   
   # Windows (PowerShell)
   Copy-Item -Recurse ..\astro-swiss-starter-theme ..\astro-swiss-backup
   ```

2. Extract the new theme version to your project location

3. Install dependencies:
   ```bash
   npm install
   ```

### Step 3: Re-apply Your Customizations (10-15 minutes)

**Company & Employee Data:**

1. Open `my-customizations/consts.ts`
2. Copy your `COMPANY` and `EMPLOYEES` data
3. Paste into the new [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts)

**Translations:**

1. Open `my-customizations/ui.ts`
2. Copy your custom translation keys
3. Merge into the new [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts)

> [!CAUTION]
> **Don't overwrite new translation keys!** Only add your custom translations, keep new keys from the update.

**Portfolio Projects:**

Copy your projects from `my-customizations/portfolio/` to `src/data/portfolio/`

**Styling:**

1. Compare `my-customizations/tokens.css` with new `src/styles/tokens.css`
2. Re-apply your color customizations
3. Keep new design tokens from the update

**Assets:**

Copy your images from `my-customizations/assets/` to `src/assets/`

**Environment Variables:**

Copy settings from `my-customizations/.env` to new `.env`

### Step 4: Test Everything (10 minutes)

```bash
npm run dev
```

**Open http://localhost:4321 and verify:**
- ✅ Company info displays correctly
- ✅ Team section shows your employees
- ✅ Portfolio shows your projects
- ✅ Colors match your brand
- ✅ All translations work (test both languages)
- ✅ Custom features still work
- ✅ No console errors (F12 → Console tab)

**Then test production build:**
```bash
npm run build
npm run preview
```

---

## Method 3: Git Merge (For Advanced Users)

**Best for:** Developers comfortable with Git and merge conflict resolution.

**Total time:** ⏱️ 15-30 minutes (depending on conflicts)

> [!IMPORTANT]
> This method requires Git knowledge and the theme repository as a remote. If you're not comfortable resolving merge conflicts, use Method 1 or 2 instead.

### Step 1: Add Theme Repository (2 minutes)

```bash
# Add theme repo as remote
git remote add theme https://github.com/vincentheimann/astro-swiss-starter-theme.git

# Fetch latest changes
git fetch theme
```

### Step 2: Create Update Branch (1 minute)

```bash
# Create update branch
git checkout -b update-to-v1.1.0

# Merge new version
git merge theme/main
```

> [!NOTE]
> **No conflicts?** Great! Skip to Step 4. If you see conflicts, continue to Step 3.

### Step 3: Resolve Conflicts (10-20 minutes)

Git will show conflicts in customized files:

```bash
# View conflicts
git status

# For each conflicting file:
# 1. Open in your editor
# 2. Look for conflict markers: <<<<<<<, =======, >>>>>>>
# 3. Keep your customizations + new features
# 4. Remove conflict markers
# 5. Save the file

# Mark as resolved
git add <file>
```

**Common conflict files:**

| File | How to Resolve |
|------|----------------|
| `src/consts.ts` | Keep your data, merge new type definitions |
| `src/i18n/ui.ts` | Keep your translations, add new keys |
| `src/styles/tokens.css` | Keep your colors, add new tokens |
| `package.json` | Use new version's dependencies |

### Step 4: Complete the Merge (5 minutes)

```bash
# After resolving all conflicts
git commit -m "Merge theme update v1.1.0"

# Test the update
npm install
npm run dev
```

**Test thoroughly before merging to main!**

### Step 5: Merge to Main (2 minutes)

```bash
# If everything works
git checkout main
git merge update-to-v1.1.0

# Clean up
git branch -d update-to-v1.1.0
```

---

## Handling Breaking Changes

Some updates may include breaking changes marked with ⚠️ in the changelog.

### Dependency Updates

**Example:** Astro 5.16 → Astro 6.0

```bash
# Update dependencies
npm install

# Check for deprecated APIs
npm run build

# Fix errors based on migration guide
```

### Configuration Changes

**Example:** `astro.config.mjs` structure change

1. Read migration notes in changelog
2. Compare your config with new version
3. Update following new structure
4. Test thoroughly

### Component API Changes

**Example:** Component props renamed

1. Check changelog for component changes
2. Search codebase for affected components:
   ```bash
   # Search for component usage
   grep -r "ComponentName" src/
   ```
3. Update component usage following new API
4. Test all affected pages

---

## Post-Update Checklist

### Development Testing

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts successfully
- [ ] No console errors in browser
- [ ] All pages load correctly
- [ ] Language switching works (French ↔ German)
- [ ] Dark mode toggle works
- [ ] Portfolio carousel and lightbox work
- [ ] Contact form displays correctly
- [ ] All customizations are intact

### Production Testing

- [ ] `npm run build` completes without errors
- [ ] `npm run preview` works correctly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Check Lighthouse scores (should be 90+)
- [ ] Verify SEO meta tags
- [ ] Test GTM integration (if used)

### Content Verification

- [ ] Company information is correct
- [ ] Team members display properly
- [ ] Portfolio projects show correctly
- [ ] All translations are accurate
- [ ] Images load properly
- [ ] Links work correctly
- [ ] Social media links are correct

---

## Troubleshooting

### Build Errors After Update

**Error:** `Cannot find module 'astro'` or similar dependency errors

```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
```

**Error:** `[ERROR] The plugin "astro:jsx" was referenced in "..." but not found`

```bash
# Solution: Clear Astro cache and rebuild
rm -rf .astro
npm run build
```

**Error:** `Unexpected token...` or syntax errors

```bash
# Solution: Check Node.js version
node --version  # Should be 18.17.0+

# Update Node.js if needed, then reinstall
npm install
```

> [!TIP]
> **Still getting errors?** Try clearing all caches: `rm -rf node_modules .astro dist package-lock.json && npm install`

### Styling Issues

**Problem:** Colors or styles look wrong

1. Check for conflicting CSS in `src/styles/tokens.css`
2. Clear browser cache (Ctrl+Shift+Delete)
3. Compare your `tokens.css` with new version
4. Ensure you're not overriding new CSS variables

### Component Errors

**Problem:** Component not rendering or throwing errors

1. Check changelog for component API changes
2. Verify you're using correct props
3. Check browser console for specific errors
4. Compare usage with new documentation

### Missing Features

**Problem:** New features from update aren't visible

1. Ensure you ran `npm install` after updating
2. Clear browser cache
3. Restart dev server
4. Check if feature requires configuration

### Merge Conflicts (Git Method)

**Problem:** Too many conflicts to resolve

```bash
# Abort the merge
git merge --abort

# Use Method 1 (Safe Update) instead
```

**Problem:** Accidentally committed broken code

```bash
# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Or undo last commit (discards changes)
git reset --hard HEAD~1
```

---

## Emergency Rollback

> [!CAUTION]
> **Something went wrong?** Don't panic. Follow these steps to restore your working version.

### If You Used Git

**Option 1: Rollback to backup branch**

```bash
# List your backup branches
git branch | grep backup

# Switch to backup branch
git checkout backup-v1.0.0

# Or switch to tagged version
git checkout pre-update-v1.0.0
```

**Option 2: Reset to previous commit**

```bash
# View recent commits
git log --oneline -10

# Reset to specific commit (replace COMMIT_HASH)
git reset --hard COMMIT_HASH

# Force push if already pushed (use with caution)
git push --force
```

### If You Used Manual Backup

**Restore from backup folder:**

```bash
# Mac/Linux
rm -rf astro-swiss-starter-theme
cp -r astro-swiss-backup-2025-12-29 astro-swiss-starter-theme
cd astro-swiss-starter-theme
npm install

# Windows (PowerShell)
Remove-Item -Recurse -Force astro-swiss-starter-theme
Copy-Item -Recurse astro-swiss-backup-2025-12-29 astro-swiss-starter-theme
cd astro-swiss-starter-theme
npm install
```

### Verify Rollback Worked

```bash
# Check version
cat package.json | grep version

# Test the site
npm run dev
```

**You should see your previous working version running.**

> [!NOTE]
> **After successful rollback:** Take time to understand what went wrong before attempting the update again. Check the changelog for breaking changes you might have missed.

---

## Best Practices

### Update Frequency

- ✅ **Do**: Update for security patches immediately
- ✅ **Do**: Update for bug fixes when convenient
- ✅ **Do**: Review new features before updating
- ⚠️ **Consider**: Waiting a few days for major updates
- ❌ **Don't**: Skip multiple versions (harder to update later)

### Testing Strategy

1. **Always test in development first**
   ```bash
   npm run dev
   ```

2. **Test the production build**
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy to staging** (if available) before production

4. **Keep old version running** until verified

### Customization Management

- ✅ **Do**: Document all customizations
- ✅ **Do**: Keep customizations in designated files
- ✅ **Do**: Use Git to track changes
- ❌ **Don't**: Modify core theme files unnecessarily
- ❌ **Don't**: Mix your code with theme code

---

## Files to Preserve During Updates

| File/Folder | What It Contains |
|-------------|------------------|
| [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts) | Company info, employees |
| [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts) | All translations |
| `src/data/portfolio/` | Portfolio projects |
| `src/styles/tokens.css` | Brand colors, design tokens |
| `src/assets/` | Your images, logos |
| `.env` | Environment variables |
| Custom components | Any files you created |

---

## Getting Help

If you encounter issues during the update:

1. **Check the Documentation**
   - [Full Documentation](../README.md)
   - [Changelog](https://github.com/vincentheimann/astro-swiss-starter-theme/blob/main/CHANGELOG.md)

2. **Search for Similar Issues**
   - [GitHub Issues](https://github.com/vincentheimann/astro-swiss-starter-theme/issues)

3. **Contact Support**
   - Email: hello@astroswiss.com
   - Include:
     - Current version
     - Target version
     - Error messages
     - Steps you've already tried

---

## Update Success! 🎉

Once you've completed the update and all tests pass:

### Confirm Everything Works

- ✅ Development server runs without errors
- ✅ Production build completes successfully
- ✅ All pages load correctly
- ✅ Features work as expected
- ✅ Your customizations are intact

### Clean Up

```bash
# Remove backup files (optional)
rm -rf my-customizations/
rm -rf astro-swiss-backup-*/

# Remove old backup branches (Git users)
git branch -d backup-v1.0.0
git tag -d pre-update-v1.0.0
```

### Document the Update

Add a note to your project documentation:

```markdown
## Update History
- 2025-12-29: Updated from v1.0.0 to v1.1.0
  - New features: [list key features]
  - Breaking changes: [list any]
  - Notes: [any important observations]
```

---

## Quick Reference Card

### Essential Commands

```bash
# Check current version
cat package.json | grep version

# Create backup (Git)
git add . && git commit -m "Pre-update backup"
git branch backup-$(date +%Y%m%d)

# Install dependencies
npm install

# Test development
npm run dev

# Build production
npm run build

# Preview production
npm run preview
```

### Emergency Rollback

```bash
# Git rollback
git checkout backup-YYYYMMDD

# Manual rollback
rm -rf current-folder
cp -r ../backup-YYYYMMDD ./
```

---

**Next Steps:**
- [Getting Started](GETTING_STARTED.md) - Theme basics
- [Data Management](DATA_MANAGEMENT.md) - Managing content
- [Customization Guide](CUSTOMIZATION.md) - Customizing the theme
- [Deployment Guide](DEPLOYMENT.md) - Deploying updates

---

*Stay up-to-date and enjoy the latest features! 🚀*

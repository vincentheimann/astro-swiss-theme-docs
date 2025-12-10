---
title: Contributing
description: Contribute to the Astro Swiss Theme with development guidelines and best practices.
---

import { Aside, Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Learn how to contribute to the Astro Swiss Theme project.

## Development Setup

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git**

### Getting Started

<Steps>

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/vincentheimann/astro-swiss-free-starter-theme.git
   cd astro-swiss-free-starter-theme
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:4321`

</Steps>

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Run TypeScript type checking |

---

## Code Style & Conventions

### File Naming

- **Components:** PascalCase - `Header.astro`, `ThemeToggle.astro`
- **Pages:** kebab-case - `about-us.astro`, `contact.astro`
- **Utilities:** camelCase - `utils.ts`, `helpers.ts`
- **Styles:** kebab-case - `global.css`, `tokens.css`

### TypeScript

Always use TypeScript for type safety:

```astro
---
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

const { title, description, variant = 'primary' } = Astro.props;
---
```

### Component Props

- Define interfaces for all component props
- Provide default values where appropriate
- Use optional props (`?`) for non-required fields
- Document complex props with JSDoc comments

```typescript
interface Props {
  /** The main heading text */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline';
}
```

### CSS Conventions

**1. Use CSS variables** for all colors and spacing:
```css
.component {
  background: var(--card);
  color: var(--card-foreground);
  padding: var(--spacing-4);
}
```

**2. Prefer Tailwind utilities** for layout:
```html
<div class="flex items-center gap-4 p-6">
```

**3. Scoped styles** for component-specific CSS:
```astro
<style>
  .custom-component {
    /* Scoped to this component */
  }
</style>
```

**4. Theme-aware styles:**
```css
.element {
  background: var(--background);
}

[data-theme="dark"] .element {
  /* Dark mode override if needed */
}
```

---

## Component Development

### Creating a New Component

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
  {icon && <img src={icon} alt="" class="feature-icon" />}
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .feature {
    padding: 2rem;
    border-radius: var(--radius);
    background: var(--card);
  }
  
  .feature-icon {
    width: 3rem;
    height: 3rem;
  }
</style>
```

### Component Best Practices

- ✅ Keep components focused and single-purpose
- ✅ Use semantic HTML elements
- ✅ Provide accessible markup (ARIA labels, alt text)
- ✅ Support both light and dark themes
- ✅ Make components responsive by default
- ✅ Use TypeScript interfaces for props
- ❌ Don't hardcode colors or spacing
- ❌ Don't create overly complex components

---

## Testing

### Manual Testing

Before submitting a PR, test:

**1. Both themes:**
- Toggle between light and dark mode
- Verify colors and contrast

**2. All languages:**
- Test each language route
- Verify translations display correctly

**3. Responsive design:**
- Test on mobile, tablet, desktop
- Check navigation, forms, images

**4. Build:**
```bash
npm run build
npm run preview
```

### Type Checking

Run TypeScript checks:

```bash
npm run astro check
```

Fix any type errors before submitting.

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if available)

---

## Pull Request Process

### Before Submitting

<Steps>

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Follow code style conventions
   - Add/update documentation if needed
   - Test thoroughly

3. **Commit with clear messages:**
   ```bash
   git commit -m "feat: add new feature X"
   git commit -m "fix: resolve issue with Y"
   git commit -m "docs: update configuration guide"
   ```

</Steps>

### Commit Message Format

Use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Submitting the PR

<Steps>

1. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request on GitHub:**
   - Provide clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - List what was tested

</Steps>

---

## Issue Reporting

### Bug Reports

Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS information
- Screenshots if applicable

### Feature Requests

Include:
- Clear description of the feature
- Use case / problem it solves
- Proposed implementation (optional)

---

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

---

## Questions?

- Check the [documentation](/getting-started/)
- Open an issue for questions
- Join the [Astro Discord](https://astro.build/chat)

**Thank you for contributing!** 🎉

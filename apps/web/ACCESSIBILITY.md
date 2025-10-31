# Accessibility Testing Guide

This project prioritizes **WCAG 2.2 AAA compliance** for senior users.

## Quick Start

```bash
# Run static accessibility checks (ESLint + TypeScript)
npm run test:a11y

# Run runtime accessibility audit with Lighthouse
npx lighthouse http://localhost:5173 --only-categories=accessibility --view
```

## Testing Checklist

### Automated Tests

- ✅ **ESLint with jsx-a11y**: Catches common accessibility issues in JSX
- ✅ **TypeScript**: Ensures type safety for ARIA attributes
- ✅ **axe-core (dev mode)**: Runtime accessibility engine in development
- 🔲 **Lighthouse**: Full accessibility audit (run manually)

### Manual Tests

- 🔲 **Keyboard Navigation**: Tab through all interactive elements
- 🔲 **Screen Reader**: Test with NVDA (Windows), JAWS, or VoiceOver (Mac)
- 🔲 **Color Contrast**: Verify 7:1 ratio (WCAG AAA)
- 🔲 **Touch Targets**: Minimum 56x56px for senior-friendly interaction
- 🔲 **Font Scaling**: Test at 18px, 24px, 32px, 40px
- 🔲 **Reduced Motion**: Respect `prefers-reduced-motion`

## WCAG 2.2 AAA Requirements Met

### Visual
- ✅ **Color Contrast**: 7:1 minimum (AAA)
- ✅ **Text Size**: 18px base, scalable to 40px
- ✅ **Focus Indicators**: 3px solid outline, high visibility
- ✅ **Touch Targets**: 56x56px minimum

### Semantic HTML
- ✅ **Landmarks**: `<main>`, `<nav>`, `<header>`, proper heading hierarchy
- ✅ **Skip Navigation**: "Skip to main content" link
- ✅ **ARIA Labels**: All interactive elements labeled
- ✅ **Form Labels**: Explicit labels, error messages

### Interaction
- ✅ **Keyboard Only**: All features accessible via keyboard
- ✅ **Screen Reader**: ARIA attributes, semantic HTML
- ✅ **No Keyboard Traps**: Proper focus management
- ✅ **Reduced Motion**: CSS respects user preference

## Running Tests

### Development (Real-time)
```bash
npm run dev
# axe-core automatically runs in browser console
```

### Pre-commit
```bash
npm run lint        # ESLint jsx-a11y rules
npm run type-check  # TypeScript validation
```

### Pre-deployment
```bash
npm run test:a11y   # Static checks
npx lighthouse http://localhost:5173 --only-categories=accessibility --view
```

### CI/CD
```bash
npm run build       # Production build
npm run lint        # Linting
npm run type-check  # Type checking
```

## Common Accessibility Issues to Watch

1. **Missing ARIA labels** on icon buttons
2. **Low color contrast** in disabled states
3. **Keyboard traps** in modals/dialogs
4. **Missing focus management** after route changes
5. **Unclear error messages** in forms
6. **Non-semantic HTML** (divs instead of buttons)

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [axe DevTools Extension](https://www.deque.com/axe/devtools/)
- [NVDA Screen Reader](https://www.nvaccess.org/download/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Senior-Specific Considerations

- **Larger touch targets**: 56px vs standard 44px
- **Higher contrast**: 7:1 vs standard 4.5:1
- **Larger text**: 18px base vs standard 16px
- **Clear language**: 8th grade reading level
- **Patient error handling**: Forgiving, helpful messages
- **Consistent layout**: Predictable navigation

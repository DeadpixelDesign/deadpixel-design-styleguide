# DeadPixel.Design style guide

The design system for [DeadPixel.Design](https://deadpixel.design): color and type tokens with light and dark themes, fonts, the pixel skull logo, Material Symbols icons and a small set of React components.

Open `index.html` (or the GitHub Pages site, if enabled) to see everything rendered.

## What's inside

| Path | Contents |
| --- | --- |
| `docs/brand-book.md` | Usage rules: voice, color, type, spacing, states, iconography, logo |
| `tokens/tokens.json` | Source of truth for every token (colors per theme, type scale, spacing, radius, shadows) |
| `tokens/tokens.css` | The same tokens as CSS custom properties, `@font-face` rules and type classes (`.h1`, `.body`, `.label`…) |
| `components/bundle.js` | Nine React 18 components on `window.DeadPixel`: Button, Icon, Link, Code, CodeBlock, Tag, TextField, Card, Alert |
| `components/bundle.css` | Component styles, built only from tokens |
| `components/index.d.ts` | Prop types for every component |
| `components/<Name>/README.md` | Guidelines per component |
| `fonts/` | Raleway, Nunito Sans and Roboto Mono variable fonts, with their licenses |
| `assets/logos/` | Pixel skull logo (full size and 512px) |
| `assets/icons/` | Starter set of Material Symbols Outlined SVGs |

## Quick start

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/bundle.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { Button } = window.DeadPixel;
  ReactDOM.createRoot(document.getElementById('app'))
    .render(React.createElement(Button, { iconAfter: 'arrow_forward' }, 'Start a project'));
</script>
```

Only need the tokens? Load `tokens/tokens.css` and use the variables directly:

```css
h1 { font-family: var(--font-display); color: var(--blue); }
a { color: var(--link); }
a:hover { color: var(--link-hover); }
```

## Themes

Light is the default. Dark applies automatically from `prefers-color-scheme: dark`, and you can force either with `data-theme="light"` or `data-theme="dark"` on `<html>`.

## Core values

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `blue` | #4379F3 | #4379F3 | Brand Blue: headings, icons, brand fills (large text only) |
| `red` | #ED5634 | #ED5634 | Brand Red: accent, highlights (large text only) |
| `blue-text` | #2E62DA | #7DA2FF | Links, body-size blue text, primary button |
| `red-text` | #BE3C1D | #FF8566 | Link hover, errors |
| `ink` | #130F25 | #ECEAF5 | Default text |
| `surface` | #FFFFFF | #0E0B1C | Page background |

Type: Raleway 700 headings (H1 34px, H2 25px, H3 20px, line-height 1.2), Nunito Sans body (16px, line-height 1.2; 1.5 for long-form), Roboto Mono code.

## License

Apache License 2.0, see [LICENSE](LICENSE). Fonts are under the SIL Open Font License and icons under Apache 2.0 from Google; see [NOTICE](NOTICE). The DeadPixel.Design name and logo are brand assets and are not covered by a trademark grant.

Author: Pedro Enrique Matos Nuñez, [https://deadpixel.design](https://deadpixel.design)

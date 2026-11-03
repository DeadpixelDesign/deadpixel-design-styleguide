# DeadPixel.Design design system

The design system for [DeadPixel.Design](https://deadpixel.design): shared tokens, CSS component classes, semantic HTML patterns, and optional framework adapters.

Open `index.html` (or the GitHub Pages site, if enabled) to see everything rendered.

## What's inside

| Path | Contents |
| --- | --- |
| `docs/brand-book.md` | Usage rules: voice, color, type, spacing, states, iconography, logo |
| `tokens/tokens.json` | Source of truth for every token (colors per theme, type scale, spacing, radius, shadows) |
| `tokens/tokens.css` | The same tokens as CSS custom properties, `@font-face` rules and type classes (`.h1`, `.body`, `.label`…) |
| `components/showcase.js` | Framework independent theme switch and color preview for the documentation page |
| `components/bundle.js` | Optional React 18 bundle on `window.DeadPixel` |
| `components/vue.bundle.js` | Optional Vue 3 browser bundle on `window.DeadPixelVue` |
| `components/svelte/` | Svelte 5 source components, compiled by Svelte or SvelteKit |
| `components/bundle.css` | Component styles, built only from tokens |
| `components/index.d.ts` | Prop types for every component |
| `components/<Name>/README.md` | Guidelines per component |
| `docs/design-system.md` | Component inventory, Bootstrap-inspired coverage, usage, and extension rules |
| `fonts/` | Raleway, Nunito Sans and Roboto Mono variable fonts, with their licenses |
| `assets/logos/` | Pixel skull logo (full size and 512px) |
| `assets/icons/` | Starter set of Material Symbols Outlined SVGs |

## Quick start: any framework

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/bundle.css">

<button class="dp-btn dp-btn-primary" type="button">Start a project</button>
```

The CSS and HTML above work in plain HTML, React, Vue, and Svelte. Only need the tokens? Load `tokens/tokens.css` and use the variables directly:

### Vue 3 browser bundle

Load Vue 3's global build, then `components/vue.bundle.js`. Register the adapter with `app.use(window.DeadPixelVue)`. Use `<DpButton>`, `<DpTag>`, `<DpCard>`, `<DpAlert>`, and `<DpTextField>`. The stylesheets above are still required.

### Svelte 5 / SvelteKit

Copy or import the token and component stylesheets into your app, keeping the `fonts/` directory beside `tokens/` so font URLs resolve. Import from `components/svelte/index.ts` in a Svelte project:

```svelte
<script lang="ts">
  import { Button, Tag } from './components/svelte';
</script>

<Button variant="primary" onclick={() => alert('Hello')}>Start a project</Button>
<Tag tone="blue">Case study</Tag>
```

Svelte compiles these source components during the app build. The adapters currently cover five core components; use the documented HTML/CSS patterns for the remaining components.

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

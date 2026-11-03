# DeadPixel.Design design system

This system is built from the original style-guide archive. Tokens remain the source of truth for color, type, spacing, radius, shadows, focus rings, and light/dark themes. The shared contract is semantic HTML plus `tokens/tokens.css` and `components/bundle.css`. Framework adapters are optional.

## Component inventory

### Foundations

- Color and semantic state tokens
- Raleway, Nunito Sans, and Roboto Mono typography
- Spacing, radius, container, shadow, and focus-ring tokens
- Light, dark, and system themes

### Core components

Button, Icon, Link, Code, CodeBlock, Tag, TextField, Card, and Alert.

### Extended components

- Breadcrumb — hierarchical navigation
- Dropdown — compact action menus
- Tabs — switching between related views
- Accordion — progressive disclosure
- Progress — determinate task status
- Spinner — indeterminate loading status
- Pagination — paged collections
- Table — responsive data display
- SelectField — labeled native select control

## Bootstrap-inspired coverage

The extended set maps to common Bootstrap primitives, but follows DeadPixel tokens and interaction patterns. Bootstrap names are used as a coverage reference only; the visual language, spacing, states, and accessibility behavior belong to DeadPixel.Design.

## Usage

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<button class="dp-btn dp-btn-primary" type="button">Start a project</button>
```

For React, load React 18, ReactDOM, and `components/bundle.js`; APIs are in `components/index.d.ts`. For Vue 3, load Vue and `components/vue.bundle.js`, then `app.use(window.DeadPixelVue)`. For Svelte 5 or SvelteKit, import components from `components/svelte/index.ts` into the app so the compiler can build them. The Vue and Svelte adapters currently cover Button, Tag, Card, Alert, and TextField; all other patterns can use the shared semantic HTML and classes shown on the site. The Svelte source is not a standalone browser script.

Consumers remain responsible for meaningful labels, state, focus management, and valid content.

## Extension rules

1. Use an existing token before introducing a new value.
2. Add a component to the bundle, type declarations, documentation, and style-guide preview together.
3. Define default, hover/focus, disabled, and error/loading states where relevant.
4. Prefer native HTML semantics before adding ARIA.
5. Keep new components composable and theme-safe.

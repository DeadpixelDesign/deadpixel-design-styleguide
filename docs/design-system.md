# DeadPixel.Design design system

This system is built from the original style-guide archive. Tokens remain the source of truth for color, type, spacing, radius, shadows, focus rings, and light/dark themes. Components are exposed through `window.DeadPixel` and use those tokens rather than Bootstrap's default visual language.

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
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
```

Use the component APIs in `components/index.d.ts`. Each interactive component includes native keyboard and screen-reader semantics where applicable; consumers remain responsible for meaningful labels, focus management around larger workflows, and valid content.

## Extension rules

1. Use an existing token before introducing a new value.
2. Add a component to the bundle, type declarations, documentation, and style-guide preview together.
3. Define default, hover/focus, disabled, and error/loading states where relevant.
4. Prefer native HTML semantics before adding ARIA.
5. Keep new components composable and theme-safe.

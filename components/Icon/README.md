# Icon

Material Symbols Outlined (weight 400, grade 0, fill 0, optical size 24), from Google's set: https://fonts.google.com/icons and https://github.com/google/material-design-icons. The 22 names in the Icons asset group render as inline SVG in `currentColor`, so they need no network and recolor with CSS `color`; any other Material Symbols name falls back to the icon font loaded by `bundle.css`.

- Provide: `name` (snake_case, as on fonts.google.com/icons), optional `size` (16, 20, 24 default, 40, 48), `label` when the icon carries meaning on its own.
- Decorative icons stay `aria-hidden` (the default). Sizes 20 inside buttons, 16 inline with 14–16px text.
- Color with tokens: `blue` for brand marks, `ink-muted` for quiet UI, `red-text` / `success` for state.

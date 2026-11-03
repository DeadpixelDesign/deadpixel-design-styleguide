# DeadPixel.Design brand book

DeadPixel.Design is a design and fullstack development studio (https://deadpixel.design). The identity pairs a clean, readable interface (Raleway headings, Nunito Sans text, Brand Blue and Brand Red) with a pixel-art skull logo in teal, mint and glitch magenta. Keep the interface calm and let the logo and pixel motifs carry the attitude.

## Content fundamentals

- Write in American English, sentence case, active voice. Headings state the point: "Fullstack builds, end to end", not "Our Services".
- Speak as "we" (the studio) to "you" (the client). Plain, technical, confident; no hype words, no exclamation marks, no emoji.
- Buttons start with a verb: "Start a project", "See the work", "Download the style guide".
- When the address matters, show the full URL as the link text (https://deadpixel.design), never "click here".
- Use `Code` for commands, file names, tokens and values: `npm run build`, `--blue`.

## Color

- Page ground is `surface` (white in light, the logo's blue-black in dark); secondary panels and cards use `surface-alt`.
- Set all text in `ink`; secondary text and metadata in `ink-muted`.
- **Brand Blue** `blue` (#4379F3) colors H1, H2 and H3, brand icons and brand fills. It is 3.99:1 on white, so use it for large text (24px+, or 19px+ bold) and marks only.
- **Brand Red** `red` (#ED5634) is the accent: highlights, emphasis marks, the hover color of large heading links. 3.51:1 on white, so large text and marks only.
- For blue or red text at body size, use `blue-text` and `red-text` (5:1+ on both surfaces, in both themes). Links are `link`; their hover is `link-hover`: blue turns red.
- The primary action fill is `blue-text` with `on-action` labels. Never put white text on `blue` or `red`.
- State colors: info `blue-text` on `info-soft`, success `success` on `success-soft`, danger `red-text` on `danger-soft`. Always pair state color with an icon and a word.
- Logo colors (`pixel-mint`, `pixel-teal`, `pixel-magenta`, `pixel-void`) are for illustration, pixel patterns and the logo's surroundings. Never use them for text on light surfaces.
- Retired 2024 values: #019FDC and #E92631. Replace them with `blue` and `red` wherever they appear.

## Typography

- Headings: Raleway 700 in `blue`, line-height 1.2. `h1` 34px (2.125rem), `h2` 25px (1.5625rem), `h3` 20px (1.25rem). One `h1` per page.
- Raleway draws old-style figures by default; set `font-variant-numeric: lining-nums` on headings that contain numbers (bundle.css does this for h1–h3).
- Body and every incidental (labels, buttons, inputs, captions): Nunito Sans. `body` is 16px (1rem), line-height 1.2. For articles and any paragraph over three lines, use `body-long` (line-height 1.5): 1.2 is tight for long reading.
- `small` (14px) for captions, metadata and field hints; `label` (12px, 700, uppercase, 0.06em tracking) for eyebrows and tags; `button` for button labels.
- Code: Roboto Mono. `code` (16px, line-height 1.4) in blocks, `code-inline` (0.9em) in running text.
- Keep running text near 65 characters per line. Font files are in `fonts/` (SIL Open Font License; see `fonts/licenses/`).

## Spacing, radius and layout

- Spacing runs on a 4px base: `space-1` 4, `space-2` 8, `space-3` 12, `space-4` 16, `space-6` 24, `space-8` 32, `space-12` 48. `space-4` is the default inset: container gutter, card padding, code block padding.
- Center content at `container-max` (1200px) with a `space-4` gutter. Separate sections with `space-8` on phones and `space-12` on wide screens.
- Corners stay nearly square: `radius-sm` (4px) for buttons, inputs, tags and code; `radius-md` (8px) for cards and alerts; `radius-0` for pixel art and full-bleed bands.
- Keep surfaces flat. Use `shadow-sm` only for raised menus and a hovered linked Card. Separate with `surface-alt` and spacing before reaching for borders; `line` is for decorative dividers, `line-strong` for control borders.

## Code and Markdown view

- Code is always dark, in both themes: `code-ink` (#F8F8F2) on `code-bg` (#2D2D2D), `radius-sm`, 16px padding in blocks and 4px for inline code.
- Long lines scroll horizontally inside the block; never wrap code. Use `CodeBlock` with `language` for Prism or Shiki highlighting.

## States and focus

- Every interactive element shows `focus-ring` on `:focus-visible`: a 2px gap in the surface color, then 2px of solid `blue-text` (5:1+ on every surface).
- Hover shifts toward red (`link-hover`); disabled drops to 45% opacity with a not-allowed cursor. Keep touch targets at least 44px tall.
- Motion is limited to 150ms color transitions, removed under `prefers-reduced-motion`.

## Iconography

- Use Material Symbols Outlined: weight 400, grade 0, unfilled, optical size 24. Browse at https://fonts.google.com/icons; source files at https://github.com/google/material-design-icons.
- In React, use the `Icon` component. The 22 icons in `assets/icons` render as inline SVG in `currentColor`; any other Material Symbols name falls back to the icon font that `bundle.css` loads from Google Fonts.
- Sizes: 20px inside buttons, 16px inline with 14–16px text, 24px standalone, 40–48px for feature marks.
- Color icons with tokens: `blue` for brand marks, `ink-muted` for quiet UI, `success` or `red-text` for state. No emoji as icons.

## Logo

- The logo is the pixel skull in `assets/logos`. Show it on `pixel-void` or `surface` in dark mode, where its black outline blends into the ground; on light grounds, place it on a `pixel-void` panel.
- Never redraw, recolor, rotate or smooth the pixels. Scale it in whole-number steps where possible and set `image-rendering: pixelated` when it is enlarged past its source size.
- Give it clear space of at least one-quarter of its width on every side.
